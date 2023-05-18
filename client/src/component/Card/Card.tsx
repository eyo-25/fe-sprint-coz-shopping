import { useSelector } from "react-redux";
import { ReactComponent as BookmarkOff } from "assets/icons/bookmarkOff.svg";
import { ReactComponent as BookmarkOn } from "assets/icons/bookmarkOn.svg";
import { useDispatch } from "react-redux";
import {
  addToBookmark,
  dequeueNotification,
  enqueueNotification,
  removeFromBookmark,
} from "redux/actions";
import {
  CardContainer,
  Image,
  ProcductImg,
  ProductInfo,
  ProductTitle,
  PurpleText,
  RightAlignText,
} from "./Card.Style";
import { IProduct } from "types/Product.types";
import { v4 as uuidv4 } from "uuid";

function Card({ product }: { product: IProduct }) {
  const {
    type,
    id,
    image_url,
    title,
    price,
    discountPercentage,
    brand_name,
    follower,
    sub_title,
    brand_image_url,
  } = product;
  const dispatch = useDispatch();

  const bookmarks = useSelector(
    (state: any) => state.bookmarkReducer.bookmarks
  );
  const isBookmark = bookmarks.some((bookmark: number) => bookmark === id);

  const notify = (message: string, dismissTime: number, type: string) => {
    const uuid = uuidv4();

    dispatch(enqueueNotification(message, dismissTime, uuid, type));
    setTimeout(() => {
      dispatch(dequeueNotification());
    }, dismissTime);
  };

  const handleRemoveBookmark = (itemId: number) => {
    dispatch(removeFromBookmark(itemId));
    notify("상품이 북마크에서 제거되었습니다", 3000, "removeBookmark");
  };
  const handleAddBookmark = (itemId: number) => {
    dispatch(addToBookmark(itemId));
    notify("상품이 북마크에 추가되었습니다", 3000, "addBookmark");
  };

  const getImageSrc = () => {
    if (type === "Brand") {
      return brand_image_url || "";
    } else {
      return image_url || "";
    }
  };

  const getProductTitle = () => {
    if (type === "Brand") {
      return <strong>{brand_name}</strong>;
    } else if (type === "Category") {
      return <strong># {title}</strong>;
    } else {
      return <strong>{title}</strong>;
    }
  };

  return (
    <CardContainer>
      <ProcductImg>
        {isBookmark ? (
          <BookmarkOn onClick={() => handleRemoveBookmark(id)} />
        ) : (
          <BookmarkOff onClick={() => handleAddBookmark(id)} />
        )}
        <Image src={getImageSrc()} alt={title ? title : "브랜드 사진"} />
      </ProcductImg>
      <ProductInfo>
        <ProductTitle>
          {getProductTitle()}
          {type === "Product" && (
            <PurpleText>${discountPercentage}%</PurpleText>
          )}
          {type === "Brand" && <strong>관심고객수</strong>}
        </ProductTitle>
        {type === "Product" && (
          <RightAlignText>
            {price && Number(price).toLocaleString()}원
          </RightAlignText>
        )}
        {type === "Brand" && (
          <RightAlignText>
            {follower && follower.toLocaleString()}
          </RightAlignText>
        )}
        {type === "Exhibition" && <p>{sub_title}</p>}
      </ProductInfo>
    </CardContainer>
  );
}

export default Card;

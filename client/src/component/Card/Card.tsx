import { useSelector } from "react-redux";
import { ReactComponent as BookmarkOff } from "assets/icons/bookmarkOff.svg";
import { ReactComponent as BookmarkOn } from "assets/icons/bookmarkOn.svg";
import { useDispatch } from "react-redux";
import { addToBookmark, removeFromBookmark } from "redux/actions";
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
import { IModalDetail } from "types/Modal.types";

export interface ICardListRenderProps {
  product: IProduct;
  handleModalOpen: (modalDetail: IModalDetail) => void;
}

function Card({ product, handleModalOpen }: ICardListRenderProps) {
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

  const bookmarks = useSelector((state: any) => state.bookmarkReducer);
  const isBookmark = bookmarks.some((bookmark: number) => bookmark === id);

  const handleRemoveBookmark = (itemId: number) => {
    dispatch(removeFromBookmark(itemId));
  };
  const handleAddBookmark = (itemId: number) => {
    dispatch(addToBookmark(itemId));
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

  const productDetail = {
    id: id,
    title: title ? title : brand_name,
    image_url: image_url ? image_url : brand_image_url,
  };

  return (
    <CardContainer>
      <ProcductImg>
        {isBookmark ? (
          <BookmarkOn onClick={() => handleRemoveBookmark(id)} />
        ) : (
          <BookmarkOff onClick={() => handleAddBookmark(id)} />
        )}
        <Image
          src={getImageSrc()}
          alt={title ? title : "브랜드 사진"}
          onClick={() => handleModalOpen(productDetail)}
        />
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

import { useSelector } from "react-redux";
import {
  CardContainer,
  Image,
  ProcductImg,
  ProductInfo,
  ProductTitle,
  PurpleText,
  RightAlignText,
} from "./Card.Style";
import { IProduct } from "common/types/Product.types";
import { IModalDetail } from "common/types/Modal.types";
import {
  BRAND,
  CATEGORY,
  EXHIBITION,
  PRODUCT,
} from "common/constants/constants";
import { Bookmark } from "../Bookmark/Bookmark";

interface ICardListRenderProps {
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

  const bookmarks = useSelector(
    (state: any) => state.bookmarkReducer.bookmarks
  );
  const isBookmark = bookmarks.some((bookmark: number) => bookmark === id);

  const getImageSrc = () => {
    if (type === BRAND) {
      return brand_image_url || "";
    } else {
      return image_url || "";
    }
  };

  const getProductTitle = () => {
    if (type === BRAND) {
      return <strong>{brand_name}</strong>;
    } else if (type === CATEGORY) {
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
        <Bookmark bookmarkStatus={isBookmark} id={id} />
        <Image
          src={getImageSrc()}
          alt={title ? title : "브랜드 사진"}
          onClick={() => handleModalOpen(productDetail)}
        />
      </ProcductImg>
      <ProductInfo>
        <ProductTitle>
          {getProductTitle()}
          {type === PRODUCT && <PurpleText>${discountPercentage}%</PurpleText>}
          {type === BRAND && <strong>관심고객수</strong>}
        </ProductTitle>
        {type === PRODUCT && (
          <RightAlignText>
            {price && Number(price).toLocaleString()}원
          </RightAlignText>
        )}
        {type === BRAND && (
          <RightAlignText>
            {follower && follower.toLocaleString()}
          </RightAlignText>
        )}
        {type === EXHIBITION && <p>{sub_title}</p>}
      </ProductInfo>
    </CardContainer>
  );
}

export default Card;

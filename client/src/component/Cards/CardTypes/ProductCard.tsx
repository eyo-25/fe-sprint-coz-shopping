import { ReactComponent as BookmarkOff } from "assets/icons/bookmarkOff.svg";
import { ReactComponent as BookmarkOn } from "assets/icons/bookmarkOn.svg";
import {
  CardContainer,
  Image,
  ProcductImg,
  ProductInfo,
  ProductTitle,
  PurpleText,
  RightAlignText,
} from "../Card.Style";
import { IProductCard } from "../Card.types";
import { useCommaFormater } from "utils/useCommaFormater";
import { addBookmark } from "utils/useBookMark";

export function ProductCard({ productObj, isBookmark }: IProductCard) {
  const { title, price, discountPercentage, image_url, id } = productObj;
  return (
    <CardContainer>
      <ProcductImg>
        {isBookmark ? (
          <BookmarkOn />
        ) : (
          <BookmarkOff onClick={() => addBookmark(id)} />
        )}
        <Image src={image_url} alt={"상품사진"} />
      </ProcductImg>
      <ProductInfo>
        <ProductTitle>
          <strong>{title}</strong>
          <PurpleText>${discountPercentage}%</PurpleText>
        </ProductTitle>
        <RightAlignText>{useCommaFormater(price)}원</RightAlignText>
      </ProductInfo>
    </CardContainer>
  );
}

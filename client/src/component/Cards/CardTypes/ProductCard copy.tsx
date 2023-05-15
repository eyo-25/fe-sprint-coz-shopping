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

export function ProductCard({
  imgsrc,
  title,
  isBookmark,
  sale,
  price,
}: IProductCard) {
  return (
    <CardContainer>
      <ProcductImg>
        {isBookmark ? <BookmarkOn /> : <BookmarkOff />}
        <Image src={imgsrc} alt={"상품사진"} />
      </ProcductImg>
      <ProductInfo>
        <ProductTitle>
          <strong>{title}</strong>
          <PurpleText>${sale}%</PurpleText>
        </ProductTitle>
        <RightAlignText>{price}원</RightAlignText>
      </ProductInfo>
    </CardContainer>
  );
}

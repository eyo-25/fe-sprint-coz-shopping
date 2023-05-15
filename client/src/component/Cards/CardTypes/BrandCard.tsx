import {
  CardContainer,
  Image,
  ProcductImg,
  ProductInfo,
  ProductTitle,
  RightAlignText,
} from "../Card.Style";
import { ReactComponent as BookmarkOff } from "assets/icons/bookmarkOff.svg";
import { ReactComponent as BookmarkOn } from "assets/icons/bookmarkOn.svg";
import { IBrandCard } from "../Card.types";

export function BrandCard({ imgsrc, title, visite, isBookmark }: IBrandCard) {
  return (
    <CardContainer>
      <ProcductImg>
        {isBookmark ? <BookmarkOn /> : <BookmarkOff />}
        <Image src={imgsrc} alt={"브랜드사진"} />
      </ProcductImg>
      <ProductInfo>
        <ProductTitle>
          <strong>{title}</strong>
          <strong>관심고객수</strong>
        </ProductTitle>
        <RightAlignText>{visite}</RightAlignText>
      </ProductInfo>
    </CardContainer>
  );
}

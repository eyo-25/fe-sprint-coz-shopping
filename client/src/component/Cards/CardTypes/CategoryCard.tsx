import {
  CardContainer,
  Image,
  ProcductImg,
  ProductInfo,
  ProductTitle,
} from "../Card.Style";
import { ReactComponent as BookmarkOff } from "assets/icons/bookmarkOff.svg";
import { ReactComponent as BookmarkOn } from "assets/icons/bookmarkOn.svg";
import { ICategoryCard } from "../Card.types";

export function CategoryCard({ imgsrc, title, isBookmark }: ICategoryCard) {
  return (
    <CardContainer>
      <ProcductImg>
        {isBookmark ? <BookmarkOn /> : <BookmarkOff />}
        <Image src={imgsrc} alt={"카테고리사진"} />
      </ProcductImg>
      <ProductInfo>
        <ProductTitle>
          <strong># {title}</strong>
        </ProductTitle>
      </ProductInfo>
    </CardContainer>
  );
}

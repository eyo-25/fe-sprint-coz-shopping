import { IExhibitionCard } from "../Card.types";
import {
  CardContainer,
  Image,
  ProcductImg,
  ProductInfo,
  ProductTitle,
} from "../Card.Style";
import { ReactComponent as BookmarkOff } from "assets/icons/bookmarkOff.svg";
import { ReactComponent as BookmarkOn } from "assets/icons/bookmarkOn.svg";

export function ExhibitionCard({
  imgsrc,
  title,
  info,
  isBookmark,
}: IExhibitionCard) {
  return (
    <CardContainer>
      <ProcductImg>
        {isBookmark ? <BookmarkOn /> : <BookmarkOff />}
        <Image src={imgsrc} alt={"전시회 사진"} />
      </ProcductImg>
      <ProductInfo>
        <ProductTitle>
          <strong>{title}</strong>
        </ProductTitle>
        <p>{info}</p>
      </ProductInfo>
    </CardContainer>
  );
}

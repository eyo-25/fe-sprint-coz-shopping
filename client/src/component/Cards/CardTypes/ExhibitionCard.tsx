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
import { addBookmark } from "utils/useBookMark";

export function ExhibitionCard({ productObj, isBookmark }: IExhibitionCard) {
  const { title, sub_title, image_url, id } = productObj;
  return (
    <CardContainer>
      <ProcductImg>
        {isBookmark ? (
          <BookmarkOn />
        ) : (
          <BookmarkOff onClick={() => addBookmark(id)} />
        )}
        <Image src={image_url} alt={"전시회 사진"} />
      </ProcductImg>
      <ProductInfo>
        <ProductTitle>
          <strong>{title}</strong>
        </ProductTitle>
        <p>{sub_title}</p>
      </ProductInfo>
    </CardContainer>
  );
}

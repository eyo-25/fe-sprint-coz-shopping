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
import { addBookmark } from "utils/useBookMark";

export function CategoryCard({ productObj, isBookmark }: ICategoryCard) {
  const { title, image_url, id } = productObj;
  return (
    <CardContainer>
      <ProcductImg>
        {isBookmark ? (
          <BookmarkOn />
        ) : (
          <BookmarkOff onClick={() => addBookmark(id)} />
        )}
        <Image src={image_url} alt={"카테고리사진"} />
      </ProcductImg>
      <ProductInfo>
        <ProductTitle>
          <strong># {title}</strong>
        </ProductTitle>
      </ProductInfo>
    </CardContainer>
  );
}

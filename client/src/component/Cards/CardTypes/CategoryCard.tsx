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

export function CategoryCard({
  productObj,
  isBookmark,
  handleRemoveBookmark,
  handleAddBookmark,
}: ICategoryCard) {
  const { title, image_url, id } = productObj;
  return (
    <CardContainer>
      <ProcductImg>
        {isBookmark ? (
          <BookmarkOn onClick={() => handleRemoveBookmark(id)} />
        ) : (
          <BookmarkOff onClick={() => handleAddBookmark(id)} />
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

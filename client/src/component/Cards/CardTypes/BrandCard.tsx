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
import { useCommaFormater } from "utils/useCommaFormater";

export function BrandCard({
  productObj,
  isBookmark,
  handleRemoveBookmark,
  handleAddBookmark,
}: IBrandCard) {
  const { brand_name, brand_image_url, follower, id } = productObj;
  return (
    <CardContainer>
      <ProcductImg>
        {isBookmark ? (
          <BookmarkOn onClick={() => handleRemoveBookmark(id)} />
        ) : (
          <BookmarkOff onClick={() => handleAddBookmark(id)} />
        )}
        <Image src={brand_image_url} alt={"브랜드사진"} />
      </ProcductImg>
      <ProductInfo>
        <ProductTitle>
          <strong>{brand_name}</strong>
          <strong>관심고객수</strong>
        </ProductTitle>
        <RightAlignText>{useCommaFormater(follower)}</RightAlignText>
      </ProductInfo>
    </CardContainer>
  );
}

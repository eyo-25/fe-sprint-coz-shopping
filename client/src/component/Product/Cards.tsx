import styled from "styled-components";
import product3 from "assets/products/product4.png";
import { ReactComponent as BookmarkOff } from "assets/icons/bookmarkOff.svg";
import { ReactComponent as BookmarkOn } from "assets/icons/bookmarkOn.svg";
import {
  IBrandCard,
  ICategoryCard,
  IExhibitionCard,
  IProductCard,
} from "./Card.types";

export function ProductCard({
  imgsrc,
  title,
  isBookmark,
  sale,
  price,
}: IProductCard) {
  console.log(product3);
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
        <Image src={imgsrc} alt={"전시회사진"} />
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

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 264px;
  margin-right: 30px;
`;
const ProcductImg = styled.div`
  position: relative;
  width: 100%;
  height: 210px;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  svg {
    z-index: 10;
    position: absolute;
    right: 12px;
    bottom: 12px;
  }
`;
const Image = styled.img<{ src: string }>`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.src}) 65% / cover no-repeat;
  transition: linear 0.8s;
  &:hover {
    transform: scale(1.1);
  }
`;
const RightAlignText = styled.p`
  text-align: right;
`;
const PurpleText = styled.strong`
  color: #452cdd;
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6px;
  height: 48px;
  div {
    display: flex;
    justify-content: space-between;
  }
`;
const ProductTitle = styled.div`
  margin-bottom: 5px;
  strong {
    font-weight: 900;
  }
`;

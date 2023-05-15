import styled from "styled-components";
import product_1 from "assets/products/product1.png";
import { ReactComponent as BookmarkOff } from "assets/icons/bookmarkOff.svg";
import { ReactComponent as BookmarkOn } from "assets/icons/bookmarkOn.svg";
import {
  PRODUCT,
  CATEGORY,
  EXHIBITION,
  BRAND,
} from "component/Product/Card.const";

type CardType =
  | typeof PRODUCT
  | typeof CATEGORY
  | typeof EXHIBITION
  | typeof BRAND;

interface ICardProps {
  type: CardType;
  title: string;
  isBookmark: boolean;
  subtitle?: string;
  count?: number;
  subCount?: number;
}

function Card({
  type,
  title,
  isBookmark,
  subtitle,
  count = 0,
  subCount = 0,
}: ICardProps) {
  return (
    <CardContainer>
      <ProcdImage>
        {isBookmark ? <BookmarkOn /> : <BookmarkOff />}
        <Image />
      </ProcdImage>
      <ProductInfo>
        <ProductTitle>
          <strong>{type === CATEGORY ? `# ${title}` : title}</strong>
          {type === PRODUCT && <PurpleText>{`${count}%`}</PurpleText>}
          {type === BRAND && <strong>{count}</strong>}
        </ProductTitle>
        <div>
          {type === EXHIBITION && <p>{subtitle}</p>}
          {type === PRODUCT && <p>{`${subCount}원`}</p>}
          {type === BRAND && <p>{subCount}</p>}
        </div>
      </ProductInfo>
    </CardContainer>
  );
}

export default Card;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 264px;
`;
const ProcdImage = styled.div`
  position: relative;
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
const Image = styled.img`
  width: 100%;
  height: 100%;
  background: url(${product_1}) 65% / cover no-repeat;
  transition: linear 0.8s;
  &:hover {
    transform: scale(1.1);
  }
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

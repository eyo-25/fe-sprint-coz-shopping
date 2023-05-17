import styled from "styled-components";
import { IProduct } from "types/Product.types";
import Card from "./Card";

function CardListRender({ products }: { products: IProduct[] }) {
  return (
    <CardListContainer>
      {products.map((product: IProduct) => (
        <CardList key={product.id}>
          <Card product={product} />
        </CardList>
      ))}
    </CardListContainer>
  );
}

export default CardListRender;

const CardListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  justify-items: center;
  margin: 0 auto;
`;
const CardList = styled.li`
  width: 100%;
  &:last-child {
    margin-right: 0;
  }
`;

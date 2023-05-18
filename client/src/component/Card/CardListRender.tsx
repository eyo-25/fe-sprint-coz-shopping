import styled from "styled-components";
import { IProduct } from "types/Product.types";
import Card from "./Card";

function CardListRender({
  products,
  observeRef,
}: {
  products: IProduct[];
  observeRef?: any;
}) {
  return (
    <CardListContainer>
      {products.map((product: IProduct, i: number) => (
        <CardList
          key={product.id}
          ref={i === products.length - 1 ? observeRef : null}
        >
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
  width: 100%;
`;
const CardList = styled.li`
  width: 100%;
  &:last-child {
    margin-right: 0;
  }
`;

import styled from "styled-components";
import { IProduct } from "common/types/Product.types";
import Card from "./Card";
import { IModalDetail } from "common/types/Modal.types";

export interface ICardListRenderProps {
  products: IProduct[];
  handleModalOpen: (modalDetail: IModalDetail) => void;
  observeRef?: any;
}

function CardListRender({
  products,
  observeRef,
  handleModalOpen,
}: ICardListRenderProps) {
  return (
    <CardListContainer>
      {products.map((product: IProduct, i: number) => (
        <CardList
          key={product.id}
          ref={i === products.length - 1 ? observeRef : null}
        >
          <Card product={product} handleModalOpen={handleModalOpen} />
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

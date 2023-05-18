import styled from "styled-components";
import { useSelector } from "react-redux";
import AppLayout from "component/AppLayout";
import CardListRender from "component/Card/CardListRender";
import { IProduct } from "types/Product.types";
import Modal from "component/Modal/Modal";
import { useMatch } from "react-router-dom";

function Main() {
  const modalMatch = useMatch(`/:productId`);
  const offset = 4;
  const productList = useSelector((state: any) =>
    state.productReducer.slice(0, offset)
  );

  const bookmarkList = useSelector((state: any) => {
    const bookmarkSet = new Set(state.bookmarkReducer);

    const filteredList = state.productReducer.filter((product: IProduct) =>
      bookmarkSet.has(product.id)
    );
    return filteredList.slice(0, offset);
  });

  return (
    <AppLayout>
      <MainContainer>
        <ListSection>
          <h4>상품 리스트</h4>
          {0 < productList.length && <CardListRender products={productList} />}
        </ListSection>
        {0 < bookmarkList.length && (
          <ListSection>
            <h4>북마크 리스트</h4>
            <CardListRender products={bookmarkList} />
          </ListSection>
        )}
      </MainContainer>
      {modalMatch && <Modal />}
    </AppLayout>
  );
}

export default Main;

const MainContainer = styled.main`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 24px;
  align-items: center;
  padding: 50px 76px;
  max-width: 1280px;
  margin: 0 auto;
`;
const ListSection = styled.section`
  margin-bottom: 34px;
  &:last-child {
    margin-bottom: 0;
  }
  h4 {
    font-size: 24px;
    font-weight: 900;
    margin-bottom: 18px;
    letter-spacing: -1.5px;
  }
`;

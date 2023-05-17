import styled from "styled-components";
import { useSelector } from "react-redux";
import AppLayout from "component/AppLayout";
import CardListRender from "component/Card/CardListRender";
import { IProduct } from "types/Product.types";

function Main() {
  const offset = 4;
  const productList = useSelector((state: any) =>
    state.productReducer.slice(0, offset)
  );
  const bookmarkList = useSelector((state: any) => {
    const filteredList = [];
    for (let i = 0; i < offset; i++) {
      if (state.bookmarkReducer[i]) {
        const index = state.productReducer.findIndex(
          (product: IProduct) => product.id === state.bookmarkReducer[i]
        );
        filteredList.push(state.productReducer[index]);
      } else {
        break;
      }
    }
    return filteredList;
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
  h4 {
    font-size: 24px;
    font-weight: 900;
    margin-bottom: 18px;
    letter-spacing: -1.5px;
  }
`;

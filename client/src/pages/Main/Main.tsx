import styled from "styled-components";
import { useSelector } from "react-redux";
import AppLayout from "component/AppLayout";
import CardListRender from "component/Card/CardListRender";
import { IProduct } from "types/Product.types";

function Main() {
  const offset = 4;
  const productList = useSelector((state: any) =>
    state.productReducer.products.slice(0, offset)
  );

  const bookmarkList = useSelector((state: any) => {
    const { bookmarks } = state.bookmarkReducer;
    const bookmarkSet = new Set(bookmarks);

    const filteredList = state.productReducer.products.filter(
      (product: IProduct) => bookmarkSet.has(product.id)
    );
    return filteredList.slice(0, offset);
  });

  return (
    <AppLayout>
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
    </AppLayout>
  );
}

export default Main;

const ListSection = styled.section`
  margin-bottom: 34px;
  width: 100%;
  h4 {
    font-size: 24px;
    font-weight: 900;
    margin-bottom: 18px;
    letter-spacing: -1.5px;
  }
`;

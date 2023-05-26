import styled from "styled-components";
import { useSelector } from "react-redux";
import { IProduct } from "common/types/Product.types";
import { useEffect, useState } from "react";
import { IModalDetail } from "common/types/Modal.types";
import { getBookmarks } from "common/utils/useBookMark";
import { loadBookmark, loadProducts } from "redux/actions";
import { useDispatch } from "react-redux";
import { fetchProducts } from "common/api/api";
import AppLayout from "common/component/AppLayout";
import CardListRender from "common/component/Card/CardListRender";
import Modal from "common/component/Modal/Modal";

function Main() {
  const [modalDetail, setModalDetail] = useState<IModalDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const productsData = localStorage.getItem("products");
    const bookmarksData = getBookmarks();
    if (0 < bookmarksData.length) {
      dispatch(loadBookmark(bookmarksData));
    }

    if (productsData !== null) {
      const parsedProductsData = JSON.parse(productsData);
      dispatch(loadProducts(parsedProductsData));
    } else {
      fetchProducts()
        .then((data) => {
          dispatch(loadProducts(data));
          localStorage.setItem("products", JSON.stringify(data));
        })
        .catch((err) => console.log(err));
    }
  }, [dispatch]);

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

  const handleModalOpen = (modalDetail: IModalDetail) => {
    setModalDetail(modalDetail);
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setModalDetail(null);
    setIsModalOpen(false);
  };

  return (
    <AppLayout>
      <MainContainer>
        <ListSection>
          <h4>상품 리스트</h4>
          {0 < productList.length && (
            <CardListRender
              products={productList}
              handleModalOpen={handleModalOpen}
            />
          )}
        </ListSection>
        {0 < bookmarkList.length && (
          <ListSection>
            <h4>북마크 리스트</h4>
            <CardListRender
              products={bookmarkList}
              handleModalOpen={handleModalOpen}
            />
          </ListSection>
        )}
      </MainContainer>
      {modalDetail && isModalOpen && (
        <Modal modalDetail={modalDetail} handleModalClose={handleModalClose} />
      )}
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
  width: 100%;
  h4 {
    font-size: 24px;
    font-weight: 900;
    margin-bottom: 18px;
    letter-spacing: -1.5px;
  }
`;

import AppLayout from "component/AppLayout";
import CardListRender from "component/Card/CardListRender";
import FilterList from "component/FilterList/FilterList";
import Modal from "component/Modal/Modal";
import { useState, useRef, useEffect, useSelector } from "react";
import { useSelector } from "react-redux";
import { IModalDetail } from "types/Modal.types";
import styled from "styled-components";
import { IProduct } from "types/Product.types";

function Productlist() {
  const [modalDetail, setModalDetail] = useState<IModalDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("Total");
  const [page, setPage] = useState(0);

  const observeRef = useRef(null);

  const productList = useSelector((state: any) => {
    if (selectedType === "Total") return state.productReducer.products;
    return state.productReducer.products.filter(
      (product: IProduct) => product.type === selectedType
    );
  });

  const nextPage = () => {
    if (productList.length >= 16 + page * 8) {
      setPage((prev) => prev + 1);
    }
  };

  const handleFilterSelected = (type: string) => {
    setSelectedType(type);
    setPage(0);
  };


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          nextPage();
        }
      },
      { threshold: 0.1 }
    );

    if (observeRef.current) {
      observer.observe(observeRef.current);
    }

    return () => {
      if (observeRef.current) {
        observer.unobserve(observeRef.current);
      }
    };
  }, [page]);
  
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
      <FilterList
        selectedType={selectedType}
        handleFilterSelected={handleFilterSelected}
      />
      <ObserveWrapper>
        <CardListRender
          products={productList.slice(0, 16 + page * 8)}
          observeRef={observeRef}
          handleModalOpen={handleModalOpen}
        />
        {modalDetail && isModalOpen && (
          <Modal modalDetail={modalDetail} handleModalClose={handleModalClose} />
        )}
      </ObserveWrapper>
    </AppLayout>
  );
}

export default Productlist;

const ObserveWrapper = styled.div`
  display: flex;
  position: relative;
`;

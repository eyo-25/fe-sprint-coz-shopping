import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { IModalDetail } from "common/types/Modal.types";
import { IProduct } from "common/types/Product.types";
import AppLayout from "common/component/AppLayout";
import FilterList from "common/component/FilterList/FilterList";
import CardListRender from "common/component/Card/CardListRender";
import Modal from "common/component/Modal/Modal";

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
      <CardListRender
        products={productList.slice(0, 16 + page * 8)}
        observeRef={observeRef}
        handleModalOpen={handleModalOpen}
      />
      {modalDetail && isModalOpen && (
        <Modal modalDetail={modalDetail} handleModalClose={handleModalClose} />
      )}
    </AppLayout>
  );
}

export default Productlist;

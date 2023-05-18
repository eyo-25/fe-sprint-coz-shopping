import AppLayout from "component/AppLayout";
import CardListRender from "component/Card/CardListRender";
import FilterList from "component/FilterList/FilterList";
import Modal from "component/Modal/Modal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { IModalDetail } from "types/Modal.types";
import { IProduct } from "types/Product.types";

function Productlist() {
  const [modalDetail, setModalDetail] = useState<IModalDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("Total");

  const productList = useSelector((state: any) => {
    if (selectedType === "Total") return state.productReducer;
    return state.productReducer.filter(
      (product: IProduct) => product.type === selectedType
    );
  });

  const handleFilterSelected = (type: string) => {
    setSelectedType(type);
  };

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
        products={productList}
        handleModalOpen={handleModalOpen}
      />
      {modalDetail && isModalOpen && (
        <Modal modalDetail={modalDetail} handleModalClose={handleModalClose} />
      )}
    </AppLayout>
  );
}

export default Productlist;

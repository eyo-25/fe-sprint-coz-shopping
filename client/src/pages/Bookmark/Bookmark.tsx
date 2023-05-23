import AppLayout from "component/AppLayout";
import CardListRender from "component/Card/CardListRender";
import FilterList from "component/FilterList/FilterList";
import Modal from "component/Modal/Modal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { IModalDetail } from "types/Modal.types";
import { IProduct } from "types/Product.types";

function Productlist() {
  const [selectedType, setSelectedType] = useState("Total");
  const [modalDetail, setModalDetail] = useState<IModalDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bookmarkList = useSelector((state: any) => {
    const bookmarkSet = new Set(state.bookmarkReducer.bookmarks);

    const filteredList = state.productReducer.products.filter(
      (product: IProduct) => {
        if (selectedType === "Total") {
          return bookmarkSet.has(product.id);
        }
        return bookmarkSet.has(product.id) && product.type === selectedType;
      }
    );
    return filteredList;
  });

  const handleModalOpen = (modalDetail: IModalDetail) => {
    setModalDetail(modalDetail);
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setModalDetail(null);
    setIsModalOpen(false);
  };

  const handleFilterSelected = (type: string) => {
    setSelectedType(type);
  };

  return (
    <AppLayout>
      <FilterList
        selectedType={selectedType}
        handleFilterSelected={handleFilterSelected}
      />
      <CardListRender
        products={bookmarkList}
        handleModalOpen={handleModalOpen}
      />
      {modalDetail && isModalOpen && (
        <Modal modalDetail={modalDetail} handleModalClose={handleModalClose} />
      )}
    </AppLayout>
  );
}

export default Productlist;

import { useState } from "react";
import { useSelector } from "react-redux";
import { IModalDetail } from "common/types/Modal.types";
import { IProduct } from "common/types/Product.types";
import AppLayout from "common/component/AppLayout";
import FilterList from "common/component/FilterList/FilterList";
import CardListRender from "common/component/Card/CardListRender";
import Modal from "common/component/Modal/Modal";

function BookmarkList() {
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

export default BookmarkList;

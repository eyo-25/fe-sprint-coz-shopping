import AppLayout from "component/AppLayout";
import CardListRender from "component/Card/CardListRender";
import FilterList from "component/FilterList/FilterList";
import { useState } from "react";
import { useSelector } from "react-redux";
import { IProduct } from "types/Product.types";

function Productlist() {
  const [selectedType, setSelectedType] = useState("Total");

  const bookmarkList = useSelector((state: any) => {
    const bookmarkSet = new Set(state.bookmarkReducer);

    const filteredList = state.productReducer.filter(
      (product: IProduct) =>
        bookmarkSet.has(product.id) && product.type === selectedType
    );
    return filteredList;
  });

  const handleFilterSelected = (type: string) => {
    setSelectedType(type);
  };

  return (
    <AppLayout>
      <FilterList
        selectedType={selectedType}
        handleFilterSelected={handleFilterSelected}
      />
      <CardListRender products={bookmarkList} />
    </AppLayout>
  );
}

export default Productlist;

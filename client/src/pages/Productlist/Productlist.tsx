import AppLayout from "component/AppLayout";
import CardListRender from "component/Card/CardListRender";
import FilterList from "component/FilterList/FilterList";
import { useState } from "react";
import { useSelector } from "react-redux";
import { IProduct } from "types/Product.types";

function Productlist() {
  const [selectedType, setSelectedType] = useState("Total");

  const productList = useSelector((state: any) => {
    if (selectedType === "Total") return state.productReducer.products;
    return state.productReducer.products.filter(
      (product: IProduct) => product.type === selectedType
    );
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
      <CardListRender products={productList} />
    </AppLayout>
  );
}

export default Productlist;

import { LOAD_PRODUCTS } from "redux/actions";

const productReducer = (state: any = [], action: any) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return action.payload.productsData;
    default:
      return state;
  }
};

export default productReducer;

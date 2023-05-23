import { LOAD_PRODUCTS } from "redux/actions";

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        products: [...action.payload.productsData],
      };
    default:
      return state;
  }
};

export default productReducer;

import { combineReducers } from "redux";
import productReducer from "./productReducer";
import bookmarkReducer from "./bookmarkReducer";

const rootReducer = combineReducers({
  productReducer,
  bookmarkReducer,
});

export default rootReducer;

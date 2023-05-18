import { combineReducers } from "redux";
import productReducer from "./productReducer";
import bookmarkReducer from "./bookmarkReducer";
import notificationReducer from "./notificationReducer";

const rootReducer = combineReducers({
  productReducer,
  bookmarkReducer,
  notificationReducer,
});

export default rootReducer;

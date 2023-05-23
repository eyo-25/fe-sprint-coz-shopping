import {
  ADD_TO_BOOKMARK,
  LOAD_BOOKMARK,
  REMOVE_FROM_BOOKMARK,
} from "redux/actions";
import { addBookmark, removeBookmark } from "utils/useBookMark";

const initialState = {
  bookmarks: [],
};

const bookmarkReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOAD_BOOKMARK:
      return {
        ...state,
        bookmarks: [...action.payload.bookmarkData],
      };
    case ADD_TO_BOOKMARK:
      addBookmark(action.payload.itemId);
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload.itemId],
      };
    case REMOVE_FROM_BOOKMARK:
      removeBookmark(action.payload.itemId);
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (bookmark) => bookmark !== action.payload.itemId
        ),
      };
    default:
      return state;
  }
};

export default bookmarkReducer;

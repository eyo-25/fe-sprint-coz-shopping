import { ADD_TO_BOOKMARK, LOAD_BOOKMARK, REMOVE_FROM_BOOKMARK } from "actions";
import { addBookmark, removeBookmark } from "utils/useBookMark";

const initialState: number[] = [];

const bookmarkReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOAD_BOOKMARK:
      return action.payload.bookmarkData;
    case ADD_TO_BOOKMARK:
      addBookmark(action.payload.itemId);
      return [...state, action.payload.itemId];
    case REMOVE_FROM_BOOKMARK:
      removeBookmark(action.payload.itemId);
      const filteredBookmarks = state.filter(
        (bookmark) => bookmark !== action.payload.itemId
      );
      return filteredBookmarks;
    default:
      return state;
  }
};

export default bookmarkReducer;

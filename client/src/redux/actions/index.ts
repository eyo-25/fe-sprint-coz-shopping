export const LOAD_BOOKMARK = "LOAD_BOOKMARK";
export const ADD_TO_BOOKMARK = "ADD_TO_BOOKMARK";
export const REMOVE_FROM_BOOKMARK = "REMOVE_FROM_BOOKMARK";
export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const ENQUEUE_NOTIFICATION = "ENQUEUE_NOTIFICATION";
export const DEQUEUE_NOTIFICATION = "DEQUEUE_NOTIFICATION";
export const IS_MODAL_OPEN = "IS_MODAL_OPEN";

export const loadBookmark = (bookmarkData: number[]) => {
  return {
    type: LOAD_BOOKMARK,
    payload: { bookmarkData },
  };
};

export const addToBookmark = (itemId: number) => {
  return {
    type: ADD_TO_BOOKMARK,
    payload: {
      itemId,
    },
  };
};

export const removeFromBookmark = (itemId: number) => {
  return {
    type: REMOVE_FROM_BOOKMARK,
    payload: {
      itemId,
    },
  };
};

export const loadProducts = (productsData: any) => {
  return {
    type: LOAD_PRODUCTS,
    payload: { productsData },
  };
};

export const enqueueNotification = (
  message: string,
  dismissTime: number,
  uuid: string,
  type: string
) => {
  return {
    type: ENQUEUE_NOTIFICATION,
    payload: { message, dismissTime, uuid, type },
  };
};

export const dequeueNotification = () => {
  return {
    type: DEQUEUE_NOTIFICATION,
  };
};

export const isModalOpen = () => {
  return {
    type: IS_MODAL_OPEN,
  };
};

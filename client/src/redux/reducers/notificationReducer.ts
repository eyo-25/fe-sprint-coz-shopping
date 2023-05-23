import { DEQUEUE_NOTIFICATION, ENQUEUE_NOTIFICATION } from "redux/actions";

const initialState = {
  notifications: [],
};

const notificationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ENQUEUE_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    case DEQUEUE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.slice(1),
      };
    default:
      return state;
  }
};

export default notificationReducer;

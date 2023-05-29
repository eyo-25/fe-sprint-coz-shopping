import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addToBookmark,
  dequeueNotification,
  enqueueNotification,
  removeFromBookmark,
} from "redux/actions";
import { ReactComponent as BookmarkOff } from "common/assets/icons/bookmarkOff.svg";
import { ReactComponent as BookmarkOn } from "common/assets/icons/bookmarkOn.svg";
import { ADD_BOOKMARK, REMOVE_BOOKMARK } from "common/constants/constants";
import { BOOKMARK_OFF_MSG, BOOKMARK_ON_MSG } from "common/msgs/msgs";
import { v4 as uuidv4 } from "uuid";

export interface IBookmarkProps {
  bookmarkStatus: boolean;
  id: number;
}

export const Bookmark = ({ bookmarkStatus, id }: IBookmarkProps) => {
  const [isBookmark, setIsBookmark] = useState(bookmarkStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsBookmark(bookmarkStatus);
  }, [bookmarkStatus]);

  const notify = (message: string, dismissTime: number = 300, type: string) => {
    const uuid = uuidv4();
    dispatch(enqueueNotification(message, dismissTime, uuid, type));
    setTimeout(() => {
      dispatch(dequeueNotification());
    }, dismissTime);
  };

  const handleRemoveBookmark = (itemId: number) => {
    setIsBookmark(false);
    dispatch(removeFromBookmark(itemId));
    notify(BOOKMARK_OFF_MSG, 3000, REMOVE_BOOKMARK);
  };

  const handleAddBookmark = (itemId: number) => {
    setIsBookmark(true);
    dispatch(addToBookmark(itemId));
    notify(BOOKMARK_ON_MSG, 3000, ADD_BOOKMARK);
  };

  return (
    <>
      {isBookmark ? (
        <BookmarkOn onClick={() => handleRemoveBookmark(id)} />
      ) : (
        <BookmarkOff onClick={() => handleAddBookmark(id)} />
      )}
    </>
  );
};

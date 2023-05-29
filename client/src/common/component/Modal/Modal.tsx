import { ReactComponent as BookmarkOff } from "common/assets/icons/bookmarkOff.svg";
import { ReactComponent as BookmarkOn } from "common/assets/icons/bookmarkOn.svg";
import { useSelector } from "react-redux";
import { useRef } from "react";
import useOnClickOutside from "common/hooks/useOnClickOutside";
import { useDispatch } from "react-redux";
import { addToBookmark, removeFromBookmark } from "redux/actions";
import { IModalDetail } from "common/types/Modal.types";
import {
  Background,
  ClosedIcon,
  ModalImage,
  ModalContainer,
  ModalText,
  ModalTitleContainer,
  ModalWrapper,
} from "./Modal.Style";
import { Bookmark } from "../Bookmark/Bookmark";

export interface IModalProps {
  modalDetail: IModalDetail;
  handleModalClose: () => void;
}

function Modal({ modalDetail, handleModalClose }: IModalProps) {
  const { title, id, image_url } = modalDetail;
  const modalRef = useRef(null);

  const isBookmark = useSelector((state: any) => {
    const bookmarkSet = new Set(state.bookmarkReducer.bookmarks);
    return bookmarkSet.has(id) ? true : false;
  });

  useOnClickOutside(modalRef, handleModalClose);

  return (
    <ModalWrapper>
      <ModalContainer ref={modalRef}>
        <ModalTitleContainer>
          <Bookmark bookmarkStatus={isBookmark} id={id} />
          <ModalText>{title}</ModalText>
        </ModalTitleContainer>
        <ClosedIcon onClick={handleModalClose} />
        <ModalImage src={image_url ? image_url : ""} />
      </ModalContainer>
      <Background />
    </ModalWrapper>
  );
}

export default Modal;

import styled from "styled-components";
import { ReactComponent as BookmarkOff } from "assets/icons/bookmarkOff.svg";
import { ReactComponent as BookmarkOn } from "assets/icons/bookmarkOn.svg";
import { ReactComponent as ClosedIconSvg } from "assets/icons/closedicon.svg";
import { IProduct } from "types/Product.types";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRef } from "react";
import useOnClickOutside from "hooks/useOnClickOutside";
import { useDispatch } from "react-redux";
import { addToBookmark, removeFromBookmark } from "redux/actions";

function Modal() {
  const { productId } = useParams();
  const product = useSelector(
    (state: any) =>
      state.productReducer.filter(
        (product: IProduct) => product.id === Number(productId)
      )[0]
  );

  const { type, brand_image_url, image_url, title, brand_name } = product;
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  useOnClickOutside(modalRef, () => navigate("/"));
  const bookmarks = useSelector((state: any) => state.bookmarkReducer);
  const isBookmark = bookmarks.some(
    (bookmark: number) => bookmark === Number(productId)
  );

  const dispatch = useDispatch();

  const handleRemoveBookmark = (itemId: number) => {
    dispatch(removeFromBookmark(itemId));
  };
  const handleAddBookmark = (itemId: number) => {
    dispatch(addToBookmark(itemId));
  };

  const getImageSrc = () => {
    if (type === "Brand") {
      return brand_image_url || "";
    } else {
      return image_url || "";
    }
  };

  const getProductTitle = () => {
    if (type === "Brand") {
      return <strong>{brand_name}</strong>;
    } else if (type === "Category") {
      return <strong># {title}</strong>;
    } else {
      return <strong>{title}</strong>;
    }
  };

  return (
    <Background>
      <ModalContainer ref={modalRef}>
        <ModalTitleContainer>
          {isBookmark ? (
            <BookmarkOn
              onClick={() => handleRemoveBookmark(Number(productId))}
            />
          ) : (
            <BookmarkOff onClick={() => handleAddBookmark(Number(productId))} />
          )}
          <ModalText>{getProductTitle()}</ModalText>
        </ModalTitleContainer>
        <ClosedIcon onClick={() => navigate("/")} />
        <Image src={getImageSrc()} />
      </ModalContainer>
    </Background>
  );
}

export default Modal;

const Background = styled.div`
  z-index: 20;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
`;
const ModalContainer = styled.div`
  position: relative;
  z-index: 30;
  width: 744px;
  height: 480px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
`;
const Image = styled.img<{ src: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src}) 100% / cover no-repeat;
`;
const ClosedIcon = styled(ClosedIconSvg)`
  position: absolute;
  top: 24px;
  right: 24px;
`;
const ModalText = styled.p`
  margin-left: 10px;
  font-size: 24px;
  font-weight: 700;
  color: white;
`;
const ModalTitleContainer = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  display: flex;
  z-index: 40;
  svg {
    &:hover {
      path {
        fill: #ffd361;
      }
    }
  }
`;

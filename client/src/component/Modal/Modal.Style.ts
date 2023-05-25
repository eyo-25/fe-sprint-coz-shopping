import styled from "styled-components";
import { ReactComponent as ClosedIconSvg } from "assets/icons/closedicon.svg";

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`;
export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
`;
export const ModalContainer = styled.div`
  position: relative;
  z-index: 20;
  width: 744px;
  height: 480px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
`;
export const ModalImage = styled.div<{ src: string }>`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      80%,
      rgba(0, 0, 0, 0.7)
    ),
    url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;
export const ClosedIcon = styled(ClosedIconSvg)`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
`;
export const ModalText = styled.p`
  margin-left: 10px;
  font-size: 24px;
  font-weight: 700;
  color: white;
`;
export const ModalTitleContainer = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  display: flex;
  z-index: 40;
  svg {
    cursor: pointer;
    &:hover {
      path {
        fill: #ffd361;
      }
    }
  }
`;

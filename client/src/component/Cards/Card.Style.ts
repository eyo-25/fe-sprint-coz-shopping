import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 264px;
  margin-right: 30px;
`;
export const ProcductImg = styled.div`
  position: relative;
  width: 100%;
  height: 210px;

  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  svg {
    z-index: 10;
    position: absolute;
    right: 12px;
    bottom: 12px;
  }
`;
export const Image = styled.img<{ src: string }>`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.src}) 65% / cover no-repeat;
  transition: linear 0.8s;
  &:hover {
    transform: scale(1.1);
  }
`;
export const RightAlignText = styled.p`
  text-align: right;
`;
export const PurpleText = styled.strong`
  color: #452cdd;
`;
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6px;
  height: 48px;
  div {
    display: flex;
    justify-content: space-between;
  }
`;
export const ProductTitle = styled.div`
  margin-bottom: 5px;
  strong {
    font-weight: 900;
  }
`;

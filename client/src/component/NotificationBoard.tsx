import styled from "styled-components";
import Toast from "./Toast/Toast";
import { useSelector } from "react-redux";

function NotificationBoard() {
  const notificationList = useSelector(
    (state: any) => state.notificationReducer
  );

  return (
    <NotificationContainer>
      <Toast
        type={"bookmark"}
        message={"상품이 북마크에 추가되었습니다"}
        dismissTime={5000}
      />
    </NotificationContainer>
  );
}

export default NotificationBoard;

const NotificationContainer = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
`;

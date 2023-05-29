import styled from "styled-components";
import Toast from "./Toast/Toast";
import { useSelector } from "react-redux";

function NotificationBoard() {
  const notificationList = useSelector(
    (state: any) => state.notificationReducer.notifications
  );

  return (
    <NotificationContainer>
      {0 < notificationList.length &&
        notificationList.map((notification: any) => (
          <Toast
            key={notification.uuid}
            type={notification.type}
            message={notification.message}
            dismissTime={notification.dismissTime}
          />
        ))}
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

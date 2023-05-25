import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as BookmarkOff } from "assets/icons/bookmarkOff.svg";
import { ReactComponent as BookmarkOn } from "assets/icons/bookmarkOn.svg";
import styled from "styled-components";

interface IToastProps {
  message: string;
  dismissTime: number;
  type: string;
}

function Toast({ type, message, dismissTime }: IToastProps) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let mounted = true;
    setTimeout(() => {
      if (mounted) {
        setIsFading(true);
      }
    }, dismissTime - 500);

    return () => {
      mounted = false;
    };
  }, [dismissTime]);

  return (
    <ToastContainer isFading={isFading}>
      {type === "addBookmark" && <BookmarkOn />}
      {type === "removeBookmark" && <BookmarkOff />}
      <ToastText>{message}</ToastText>
    </ToastContainer>
  );
}

export default Toast;

const ToastContainer = styled.div<{ isFading: boolean }>`
  display: ${(props) => (props.isFading ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  padding: 19px 24px;
  background: white;
  border-radius: 10px;
  margin-top: 12px;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.1);
`;
const ToastText = styled.p`
  margin-left: 8px;
`;

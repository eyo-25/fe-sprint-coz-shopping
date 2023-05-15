import { useEffect } from "react";

const useOnClickOutside = (ref: React.RefObject<HTMLElement>, handler: any) => {
  useEffect(() => {
    const listener = (evnet: any) => {
      if (!ref.current || ref.current.contains(evnet.target)) {
        return;
      } else {
        handler();
      }
    };
    // 이벤트 등록
    document.addEventListener("mousedown", listener);
    // 클린업
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;

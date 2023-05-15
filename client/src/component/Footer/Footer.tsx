import styled from "styled-components";

function Footer() {
  return (
    <HeaderContianer>
      <p>개인정보 처리방침 | 이용 약관</p>
      <p>All rights reserved @ Codestates</p>
    </HeaderContianer>
  );
}

export default Footer;

const HeaderContianer = styled.footer`
  height: 58px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(1, 1, 1, 0.1);
  p {
    color: #888888;
    font-size: 12px;
    line-height: 1.3;
  }
`;

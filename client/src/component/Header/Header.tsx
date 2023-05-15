import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { ReactComponent as LogoImg } from "assets/logo.svg";
import { ReactComponent as HamIcon } from "assets/hamIcon.svg";
import HamMenu from "./HamMenu";

function Header() {
  const [hamMenuOpen, setHamMenuOpen] = useState(false);
  const hamMenuRef = useRef<HTMLDivElement>(null);

  const onMenuClickHandler = () => {
    setHamMenuOpen((prev) => !prev);
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <LogoContainer>
          <Link to="/">
            <LogoImg />
          </Link>
        </LogoContainer>
        <HamMenuContainer ref={hamMenuRef}>
          <HamIcon onClick={onMenuClickHandler} />
          {hamMenuOpen && (
            <HamMenu hamMenuRef={hamMenuRef} setHamMenuOpen={setHamMenuOpen} />
          )}
        </HamMenuContainer>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  height: 80px;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.1);
`;
const HeaderWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  height: 100%;
  padding: 0 76px;
  justify-content: space-between;
  max-width: 1280px;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  svg {
    height: 30px;
    width: 297px;
  }
`;
const HamMenuContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 50px;
  &:hover {
    cursor: pointer;
  }
`;

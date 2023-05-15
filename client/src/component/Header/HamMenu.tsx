import styled from "styled-components";
import { ReactComponent as ProuctIcon } from "assets/producticon.svg";
import { ReactComponent as BookmarkIcon } from "assets/bookmarkicon.svg";
import { Link } from "react-router-dom";
import useOnClickOutside from "hooks/useOnClickOutside";

interface IHamMenuProps {
  setHamMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  hamMenuRef: React.RefObject<HTMLDivElement>;
}

function HamMenu({ setHamMenuOpen, hamMenuRef }: IHamMenuProps) {
  useOnClickOutside(hamMenuRef, () => setHamMenuOpen(false));

  return (
    <Nav className="Nav">
      <NavMenu>
        <p>이요25님, 안녕하세요!</p>
      </NavMenu>
      <NavMenu>
        <Link to="/productlist">
          <ProuctIcon />
          <p>상품리스트 페이지</p>
        </Link>
      </NavMenu>
      <NavMenu>
        <Link to="/bookmark">
          <BookmarkIcon />
          <p>북마크 페이지</p>
        </Link>
      </NavMenu>
    </Nav>
  );
}

export default HamMenu;

const Nav = styled.nav`
  position: absolute;
  top: 70px;
  right: -45px;
  width: 200px;
  height: 172px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  a {
    display: flex;
    align-items: center;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 24px;
  border-bottom: 1px solid #e5e5e5;
  &:last-child {
    border: none;
  }
  svg {
    margin-right: 8px;
  }
`;

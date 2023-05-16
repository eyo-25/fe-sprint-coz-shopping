import Header from "component/Header/Header";
import styled from "styled-components";
import Card from "component/Cards/Card";
import { useSelector } from "react-redux";

function Main() {
  const offset = 4;
  const products = useSelector((state: any) =>
    state.productReducer.slice(0, offset)
  );

  return (
    <>
      <Header />
      <MainContainer>
        {products && 0 < products.length
          ? products.map((el: any) => <Card key={el.id} product={el} />)
          : null}
      </MainContainer>
    </>
  );
}

export default Main;

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  padding: 50px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0px 76px;
`;

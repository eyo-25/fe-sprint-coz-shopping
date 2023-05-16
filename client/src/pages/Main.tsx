import Header from "component/Header/Header";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Card from "component/Cards/Card";
import { ICardType } from "component/Cards/Card.types";

function Main() {
  const offset = 4;
  const products = useSelector((state: any) =>
    state.productReducer.slice(0, offset)
  );

  return (
    <>
      <Header />
      <MainContainer>
        {0 < products.length &&
          products.map((product: ICardType) => (
            <Card key={product.id} product={product} />
          ))}
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

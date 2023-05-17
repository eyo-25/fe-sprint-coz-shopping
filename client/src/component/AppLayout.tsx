import React, { ReactNode } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styled from "styled-components";

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
}

export default AppLayout;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 76px;
  max-width: 1280px;
  margin: 0 auto;
`;

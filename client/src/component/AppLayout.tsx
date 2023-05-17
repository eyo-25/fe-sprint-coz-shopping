import React, { ReactNode } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default AppLayout;

import React, { FC } from "react";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";

const Layout: FC<any> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;

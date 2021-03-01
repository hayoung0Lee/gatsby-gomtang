import React, { FC } from "react";
import Header from "./header/header";
import Main from "./main";
import Footer from "./footer";
import Container from "@material-ui/core/Container";
import "./layout.css";

const Layout: FC<any> = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export default Layout;

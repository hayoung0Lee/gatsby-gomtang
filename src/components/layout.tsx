import React, { FC } from "react";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import "./layout.css";
import styled from "styled-components";

const LayoutStyle = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: 70px auto 100px; // auto As a maximum represents the largest max-content size of the items in that track.
`;

const Layout: FC<any> = ({ children }) => {
  return (
    <LayoutStyle>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutStyle>
  );
};

export default Layout;

import React, { FC } from "react";
import styled from "styled-components";
import Nav from "./nav";
import Logo from "./logo";

const HeaderStyle = styled.header`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  background-color: #fffff9;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

const Header: FC = () => {
  return (
    <HeaderStyle>
      <Logo />
      <Nav />
    </HeaderStyle>
  );
};

export default Header;

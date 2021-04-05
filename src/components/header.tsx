import React, { FC } from "react";
import styled from "styled-components";
import Nav from "./nav";
import Logo from "./logo";

const HeaderStyle = styled.header`
  grid-column: 2 / -2;
  border-bottom: 1px solid black;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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

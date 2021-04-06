import React, { FC } from "react";
import styled from "styled-components";
import Nav from "./nav";
import Logo from "./logo";

const HeaderStyle = styled.header`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  background-color: #eae7dc;
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

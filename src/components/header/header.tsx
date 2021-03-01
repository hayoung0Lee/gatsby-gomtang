import React, { FC } from "react";
import styled from "styled-components";
// import Logo from "./logo";
import MenuBar from "./menu-bar";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background-color: grey;
  border: 1px solid black;
`;

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <MenuBar />
    </HeaderWrapper>
  );
};

export default Header;

import React, { FC } from "react";
import styled from "styled-components";
// import Logo from "./logo";
// import MenuBar from "./menu-bar";

const LogoStyle = styled.nav`
  border-bottom: 1px solid black;
  min-height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    border: 1px solid black;
  }

  @media (max-width: 800px) {
    grid-column: span 2;
  }
`;

const Logo: FC = () => {
  return (
    <LogoStyle>
      <p>Logo</p>
    </LogoStyle>
  );
};

export default Logo;

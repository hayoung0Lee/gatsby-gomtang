import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { logoSize } from "../../utils/constants";

const LogoStyle = styled.div`
  width: ${logoSize.width}px;
  height: ${logoSize.height}px;
  border: 1px solid black;

  @media screen and (max-width: 1100px) {
    position: absolute;
    left: calc(50% - 100px);
    background-color: green;
  }
`;

const Logo = () => (
  <Link
    to="/"
    style={{
      color: `inherit`,
      textDecoration: `none`,
    }}
  >
    <LogoStyle>logo image</LogoStyle>
  </Link>
);

export default Logo;

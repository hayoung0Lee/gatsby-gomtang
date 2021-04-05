import React, { FC } from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  grid-column: 2 / -2;
  grid-row: -2 / -1;
  border-top: 1px solid black;
`;

const Footer: FC = () => {
  return <FooterStyle>This is Footer</FooterStyle>;
};

export default Footer;

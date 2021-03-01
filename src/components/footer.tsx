import React, { FC } from "react";
import styled from "styled-components";
import { footerHeight } from "../utils/constants";

const FooterStyle = styled.footer`
  height: ${footerHeight}px;
  border: 1px solid black;
`;

const Footer: FC = () => {
  return <FooterStyle>This is Footer</FooterStyle>;
};

export default Footer;

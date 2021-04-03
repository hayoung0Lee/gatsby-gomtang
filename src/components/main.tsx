import React, { FC } from "react";
import styled from "styled-components";
import { headerHeight, footerHeight } from "../utils/constants";

const MainStyle = styled.main`
  min-height: calc(100vh - ${headerHeight + footerHeight}px);
  background-color: green;
`;

const Main: FC<React.ReactNode> = ({ children }) => {
  return <MainStyle>{children}</MainStyle>;
};

export default Main;

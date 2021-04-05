import React, { FC } from "react";
import styled from "styled-components";

const MainStyle = styled.main`
  grid-column: 2 / -2;
  // grid-row: 3 / span 1;
`;

const Main: FC<React.ReactNode> = ({ children }) => {
  return <MainStyle>{children}</MainStyle>;
};

export default Main;

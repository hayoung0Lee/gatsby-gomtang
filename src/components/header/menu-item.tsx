import React, { FC } from "react";
import styled from "styled-components";

const MenuItemWrapper = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuItem: FC<any> = ({ children }) => {
  return <MenuItemWrapper>{children}</MenuItemWrapper>;
};

export default MenuItem;

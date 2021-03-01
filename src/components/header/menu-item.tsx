import React, { FC } from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const MenuItemWrapper = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuItem: FC<any> = ({ children }) => {
  return (
    <MenuItemWrapper>
      <Typography>{children}</Typography>
    </MenuItemWrapper>
  );
};

export default MenuItem;

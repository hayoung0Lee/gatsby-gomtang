import { Link } from "gatsby";
import React, { FC } from "react";
import Logo from "./logo";
import styled from "styled-components";
import MenuItem from "./menu-item";
import { headerHeight } from "../../utils/constants";

const MenuWrapper = styled.menu`
  margin: 0;
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${headerHeight}px;
`;

const BiggerMenu: FC = () => {
  return (
    <>
      <Logo />
      <MenuWrapper>
        <Link
          to="/about/"
          style={{
            color: `inherit`,
            textDecoration: `none`,
          }}
        >
          <MenuItem>About</MenuItem>
        </Link>
        <Link
          to="/browse/"
          style={{
            color: `inherit`,
            textDecoration: `none`,
          }}
        >
          <MenuItem>Browse Item</MenuItem>
        </Link>
        <Link
          to="/event/"
          style={{
            color: `inherit`,
            textDecoration: `none`,
          }}
        >
          <MenuItem>Event</MenuItem>
        </Link>
        <Link
          to="/contact/"
          style={{
            color: `inherit`,
            textDecoration: `none`,
          }}
        >
          <MenuItem>Contact Page</MenuItem>
        </Link>
      </MenuWrapper>
    </>
  );
};

export default BiggerMenu;

import { Link } from "gatsby";
import React, { FC } from "react";
import Logo from "./logo";
import styled from "styled-components";
import MenuItem from "./menu-item";
import { headerHeight } from "../../utils/constants";
import { useStaticQuery, graphql } from "gatsby";
import ListItem from "@material-ui/core/ListItem";

const MenuWrapper = styled.menu`
  margin: 0;
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${headerHeight}px;
`;

const BiggerMenu: FC = () => {
  const data = useStaticQuery(graphql`
    {
      utilsJson {
        menu {
          about
          browse
          contact
          event
        }
      }
    }
  `);

  return (
    <>
      <Logo />
      <MenuWrapper>
        <ListItem button>
          <Link
            to={"/about/"}
            style={{
              color: `inherit`,
              textDecoration: `none`,
            }}
          >
            <MenuItem>{data.utilsJson.menu.about}</MenuItem>
          </Link>
        </ListItem>
        <ListItem button>
          <Link
            to={"/browse/"}
            style={{
              color: `inherit`,
              textDecoration: `none`,
            }}
          >
            <MenuItem>{data.utilsJson.menu.browse}</MenuItem>
          </Link>
        </ListItem>
        <ListItem button>
          <Link
            to={"/event/"}
            style={{
              color: `inherit`,
              textDecoration: `none`,
            }}
          >
            <MenuItem>{data.utilsJson.menu.event}</MenuItem>
          </Link>
        </ListItem>
        <ListItem button>
          <Link
            to={"/contact/"}
            style={{
              color: `inherit`,
              textDecoration: `none`,
            }}
          >
            <MenuItem>{data.utilsJson.menu.contact} </MenuItem>
          </Link>
        </ListItem>
      </MenuWrapper>
    </>
  );
};

export default BiggerMenu;

import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import LinkButton from "./link-button";

const NavStyle = styled.nav`
  min-height: 70px;
  grid-column: span 2;

  & ul {
    padding-right: 50px;
    display: flex;
    justify-content: flex-end;
    // flex-wrap: wrap;
    align-items: center;
    height: 100%;

    & li {
      min-width: 100px;
      height: 40px;

      display: flex;
      justify-content: center;
      align-items: center;

      color: #8e8d8a;
    }

    & li a > span {
      width: 100px;
      height: 40px;
      text-align: center;
      line-height: 40px;
    }

    & li:hover a > span {
      border-bottom: 2px solid #8e8d8a;
    }
  }

  @media (max-width: 800px) {
    & ul {
      padding-right: 0px;
      padding-bottom: 10px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }

  @media (max-width: 360px) {
    & ul {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`;

const Nav: FC = () => {
  return (
    <NavStyle>
      <ul>
        <li>
          <LinkButton to="/about" activeStyle={{ fontWeight: "bold" }}>
            다락재 쉼터{" "}
          </LinkButton>
        </li>
        <li>
          <LinkButton to="/browse" activeStyle={{ fontWeight: "bold" }}>
            메뉴 소개
          </LinkButton>
        </li>
        <li>
          <LinkButton to="/visit" activeStyle={{ fontWeight: "bold" }}>
            찾아오시는 길
          </LinkButton>
        </li>
        <li>
          <LinkButton to="/contact" activeStyle={{ fontWeight: "bold" }}>
            Contact
          </LinkButton>
        </li>
      </ul>
    </NavStyle>
  );
};

export default Nav;

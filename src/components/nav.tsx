import React, { FC } from "react";
import styled from "styled-components";

const NavStyle = styled.nav`
  border-bottom: 1px solid green;
  min-height: 70px;
  grid-column: span 2;

  & ul {
    display: flex;
    justify-content: flex-end;
    // flex-wrap: wrap;
    align-items: center;
    height: 100%;

    & li {
      min-width: 120px;
      height: 40px;
      display: block;
      border: 1px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 800px) {
    & ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
  }
`;

const Nav: FC = () => {
  return (
    <NavStyle>
      <ul>
        <li>다락재 쉼터</li>
        <li>메뉴 소개</li>
        <li>찾아오시는 길</li>
        <li>Contact</li>
      </ul>
    </NavStyle>
  );
};

export default Nav;

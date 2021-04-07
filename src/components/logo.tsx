import React, { FC } from "react";
import styled from "styled-components";
import LinkButton from "./link-button";

const LogoStyle = styled.nav`
  min-height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    min-height: 50px;
    width: 190px;
    display: inline;
    font-size: 35px;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    color: #e85a4f;
  }

  @media (max-width: 800px) {
    grid-column: span 2;

    & p {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
`;

const Logo: FC = () => {
  return (
    <LogoStyle>
      <p className="logo">
        <LinkButton to="/">다락재 쉼터 </LinkButton>
      </p>
    </LogoStyle>
  );
};

export default Logo;

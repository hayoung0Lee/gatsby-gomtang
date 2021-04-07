import React, { useContext, useState, useReducer, FC } from "react";
import Layout from "../components/layout";
import Container from "../components/container";
import styled from "styled-components";
import { graphql } from "gatsby";

interface Props {
  menu1: string;
  menu2: string;
}

const BrowseStyle = styled.div<Props>`
  font-family: "Noto Sans KR", sans-serif;
  grid-column: 2 / -2;
  display: grid;
  grid-template-rows: 70px 1fr;
  grid-template-columns: 1fr;

  & > h1 {
    grid-column: span;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 20px;
    color: #444441;
  }

  & .content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-bottom: 20px;

    & .first,
    & .second {
      // border: 2px solid #444441;
      width: 500px;
      height: 400px;
      box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3);
      position: relative;

      & .menuName {
        background-color: rgba(255, 255, 255, 0.5);
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 70px;
        color: #070600;
        font-size: 25px;
      }
    }

    // 한우곰탕
    & .first {
      background: url(${(props) => props.menu1}) center rgba(245, 223, 192, 0.7);
      background-repeat: no-repeat;
      background-color: rgba(255, 252, 220, 0.7);
      background-size: cover;
      cursor: pointer;

      & div.menuName {
        & > p:first-child {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 10px;
          margin-bottom: 10px;
        }

        & > p:last-child {
          display: block;
          font-size: 14px !important;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      & > a {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
      }
    }

    // 머리고기
    & .second {
      background: url(${(props) => props.menu2}) center rgba(245, 223, 192, 0.7);
      background-repeat: no-repeat;
      background-color: rgba(255, 252, 220, 0.7);
      background-size: cover;

      & .menuName {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  @media (max-width: 600px) {
    grid-column: 1 / -1;
    margin-left: 20px;
    margin-right: 20px;

    & .content {
      & .first {
        width: 100%;
        min-height: 300px;
      }
      & .second {
        width: 100%;
        min-height: 300px;
      }
    }
  }
`;

const BrowsePage: FC<any> = ({ data }) => {
  return (
    <Layout>
      <Container>
        <BrowseStyle
          menu1={data.menu1.childImageSharp.fluid.src}
          menu2={data.menu2.childImageSharp.fluid.src}
        >
          <h1>다락재 쉼터 메뉴 보기</h1>
          <div className="content">
            <div className="first">
              <a href="https://smartstore.naver.com/drj_gomtang"></a>
              <div className="menuName">
                <p>한우 곰탕</p>
                <p>스마트 스토어에서 주문하기</p>
              </div>
            </div>
            <div className="second">
              <div className="menuName">머리 고기</div>
            </div>
          </div>
        </BrowseStyle>
      </Container>
    </Layout>
  );
};

export default BrowsePage;

export const query = graphql`
  {
    menu1: file(relativePath: { eq: "menu1.png" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }

    menu2: file(relativePath: { eq: "menu2.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`;

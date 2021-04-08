import React from "react";
import Layout from "../components/layout";
import Container from "../components/container";
import styled from "styled-components";
import Seo from "../components/seo";

const ContactStyle = styled.div`
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
    gap: 100px;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-bottom: 120px;

    & > div {
      // border-bottom: 2px solid #444441;
      width: 400px;
      height: 200px;

      & > h2 {
        background-color: #444441;
        color: white;
        height: 40px;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      & > p {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #444441;
        border: 1px solid black;
        height: 160px;
        // height: 100%;
      }
    }
  }

  @media (max-width: 480px) {
    grid-column: 1 / -1;
    margin-left: 20px;
    margin-right: 20px;
    & .content {
      & > div {
        width: 100%;
        min-height: 200px;
      }
    }
  }
`;

const ContactPage = () => (
  <Layout>
    <Seo menuName="contact" />
    <Container>
      <ContactStyle>
        <h1>다락재 쉼터에 문의하기</h1>
        <div className="content">
          <div className="first">
            <h2>주문 상담 전화</h2>
            <p>054-383-1213</p>
          </div>
          <div className="second">
            <h2>단체 예약</h2>
            <p>단체 예약은 n일전까지 부탁드립니다. </p>
          </div>
        </div>
      </ContactStyle>
    </Container>
  </Layout>
);

export default ContactPage;

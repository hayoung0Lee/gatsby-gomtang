import React from "react";
import Layout from "../components/layout";
import Map from "../components/map";
import styled from "styled-components";

const VisitStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  font-family: "Noto Sans KR", sans-serif;

  & > div {
    grid-column: 2 / -2;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 100px 70px repeat(auto-fit, 230px);

    & > h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      color: #444441;
    }

    & > p {
      display: flex;
      justify-content: center;
      // align-items: center;
      font-size: 15px;
      color: #444441;
      line-height: 23px;
    }
  }
`;

const VisitPage = () => (
  <Layout>
    <VisitStyle>
      <div>
        <h1>다락재 쉼터 찾아오시는 길</h1>
        <p>
          경북 군위군 군위읍 도군로 2488 <br />
          방문을 환영합니다. 조심히 찾아와주세요
        </p>
        {/* <div>
          <div>주변 볼거리</div>
          <div>주변의 골프장</div>
          <div>다락재 쉼터만의 볼거리</div>
        </div> */}
        <Map />
      </div>
    </VisitStyle>
  </Layout>
);

export default VisitPage;

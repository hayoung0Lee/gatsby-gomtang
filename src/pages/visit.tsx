import React from "react";
import Layout from "../components/layout";
import Map from "../components/map";
import SmallMap from "../components/small-map";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Container from "../components/container";
import Seo from "../components/seo";

const VisitStyle = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  grid-column: 2 / -2;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 70px 70px auto;

  & > h1 {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 20px;
    color: #444441;
  }

  & > p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    color: #444441;
    line-height: 23px;
  }

  & .kakaoMap {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
  }
`;

const VisitPage = () => {
  // 작은 지도를 보여줘야하는 breakpoint
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <Layout>
      <Seo menuName="visit" />
      <Container>
        <VisitStyle>
          <h1>다락재 쉼터 찾아오시는 길</h1>
          <p>
            경북 군위군 군위읍 도군로 2488. 방문을 환영합니다. 조심히 찾아오세요
          </p>
          <div className="kakaoMap">
            {isSmallScreen ? <SmallMap /> : <Map />}
          </div>
        </VisitStyle>
      </Container>
    </Layout>
  );
};

export default VisitPage;

import React, { FC } from "react";
import Layout from "../components/layout";
import Banner from "../components/banner";
import styled from "styled-components";

const IndexMenu = styled.section`
  background-color: #c2cad0;
  margin-top: 50px;
  margin-bottom: 50px;
  & > h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    grid-template-rows: repeat(auto-fit, 230px);
    // The grid-auto-rows CSS property specifies the size of an implicitly-created grid row track or pattern of tracks.
    grid-auto-rows: 230px;

    gap: 20px 20px;
    padding-top: 35px;
    padding-bottom: 50px;

    & > div {
      border: 1px solid black;
    }
  }
`;

const SocialMenu = styled.section`
  background-color: #7395ae;
  margin-bottom: 50px;
  & > h1 {
    padding-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    grid-template-rows: repeat(auto-fit, 150px);
    // The grid-auto-rows CSS property specifies the size of an implicitly-created grid row track or pattern of tracks.
    grid-auto-rows: 150px;

    gap: 20px 20px;
    padding-top: 35px;
    padding-bottom: 50px;

    & > div {
      border: 1px solid black;
    }
  }
`;
const IndexPage: FC<React.ReactNode> = ({ children }) => {
  return (
    <Layout>
      <Banner />
      <IndexMenu>
        <h1>다락재 쉼터는 어떤 곳인가요?</h1>
        <div>
          <div>메뉴 소개</div>
          <div>곰탕 제조 과정</div>
          <div>방문하시는 길</div>
        </div>
      </IndexMenu>

      <SocialMenu>
        <h1>다락재 쉼터 더 알아보기</h1>
        <div>
          <div>다락재 쉼터 인스타그램</div>
          <div>스마트 스토어 방문하기</div>
        </div>
      </SocialMenu>
    </Layout>
  );
};

export default IndexPage;

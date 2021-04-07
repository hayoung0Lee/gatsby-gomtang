import React, { FC } from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import Container from "../components/container";

const AboutStyle = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  grid-column: 2 / -2;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;

  & > div {
    padding-top: 40px;
    display: flex;
    justify-content: space-around;
    gap: 40px;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 100px;

    & .img-wrapper {
      max-width: 500px;
      box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3);

      & img {
        width: 100%;
      }
    }

    & .content-wrapper {
      width: 600px;
      min-height: 200px;

      & > h1 {
        font-size: 50px;
        margin-bottom: 40px;
      }

      & > div {
        line-height: 30px;
      }
    }
  }

  & .reverse {
    flex-direction: row-reverse;
  }
  @media (max-width: 1320px) {
    // background-color: green;

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      & .content-wrapper {
        margin-top: 10px;
        width: 80%;
        min-height: 200px;
      }
    }
  }
`;

const FirstContent: FC<any> = ({ data }) => {
  return (
    <div>
      <div className="img-wrapper">
        <img
          src={data.howpic.childImageSharp.fluid.src}
          alt="다락재쉼터 경관"
        />
      </div>
      <div className="content-wrapper">
        <h1>다락재 쉼터</h1>
        <div>
          매일 한우곰탕을 끓입니다. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Esse cupiditate numquam dignissimos quae, provident
          voluptatibus necessitatibus sed ipsam dolore cumque suscipit deleniti
          aliquam rerum sunt cum inventore tenetur eum! Modi.
        </div>
      </div>
    </div>
  );
};

// reverse
const SecondContent: FC<any> = ({ data }) => {
  return (
    <div className="reverse">
      <div className="img-wrapper">
        <img
          src={data.second.childImageSharp.fluid.src}
          alt="다락재쉼터 경관"
        />
      </div>
      <div className="content-wrapper">
        <h1>다락재 쉼터</h1>
        <div>
          매일 한우곰탕을 끓입니다. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Esse cupiditate numquam dignissimos quae, provident
          voluptatibus necessitatibus sed ipsam dolore cumque suscipit deleniti
          aliquam rerum sunt cum inventore tenetur eum! Modi.
        </div>
      </div>
    </div>
  );
};

const AboutPage: FC<any> = ({ data }) => {
  return (
    <Layout>
      <Container>
        <AboutStyle>
          <FirstContent data={data} />
          <SecondContent data={data} />
        </AboutStyle>
      </Container>
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  {
    howpic: file(relativePath: { eq: "how-they-make.jpeg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
    second: file(relativePath: { eq: "sample5.jpeg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`;

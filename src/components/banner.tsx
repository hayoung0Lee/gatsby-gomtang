import React, { FC } from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

interface Props {
  bg: string;
}

const SectionStyle = styled.section<Props>`
  // grid for section
  grid-column: 2 / -2;
  // border-bottom: 1px solid green;
  min-height: 400px;

  font-family: "Noto Sans KR", sans-serif;
  // make section to grid container
  background: url(${(props) => props.bg}) center rgba(245, 223, 192, 0.7);
  background-repeat: no-repeat;
  background-color: rgba(255, 252, 220, 0.5);
  background-size: cover;
  color: #070600;

  /* Grid styles */
  display: grid;
  align-items: center;
  // 공간이 있으면 1fr씩 먹고, 작아지면 240px 각각
  // auto-fit: fit as many column as possible if it fits
  // with 1fr, 전체를 채워버린다
  // auto-fit과 minmax를 함께 사용하면 언제든지 꽉 채우게 된다.
  // 아래의 예시에서는 최소 240px을 보장하고, 공간이 그러고도 남으면 서로 equally divide해서 1fr가진다
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));

  & h1 {
    text-align: center;
    font-size: 30px;
    z-index: 100;
  }

  & article {
    // border: 1px solid black;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    box-sizing: border-box;
    margin-left: 50px;
    margin-right: 50px;

    & p:first-child {
      margin: auto;
      margin-top: 40px;
      margin-bottom: 40px;
      line-height: 24px;
      min-width: 260px;
    }

    & p:last-child {
      background-color: #444441;
      color: white;
      margin-bottom: 20px;
      padding: 15px;
      border-radius: 3px;
    }
  }

  position: relative;
  .layer {
    // background-color: red;
    position: absolute;
    width: 92%;
    height: 80%;
    left: 5%;
    background-color: rgba(255, 255, 255, 0.45);
  }

  @media (max-width: 1000px) {
    // background-color: green;

    & h1 {
      padding-top: 40px;
    }

    & article {
      & p:first-child {
        margin-bottom: 20px;
      }
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

    .layer {
      position: absolute;
      width: 100%;
      left: 0;
      height: 85%;
    }

    & article {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;

const Banner: FC = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "sample1.jpeg" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `);

  return (
    <SectionStyle bg={data.file.childImageSharp.fluid.src}>
      <h1>
        주인이 힘들고 고달플수록 <br />
        손님은 맛있는 음식을 먹는다
      </h1>
      <article>
        <p>
          안녕하세요 다락재 쉼터입니다. 옛날 방식 그대로 정성을 가득 담은 한우
          소머리 곰탕과 머리 고기 수육을 다락재 쉼터에서 맛보세요. 한우 소머리
          곰탕은 네이버 스마트 스토어를 통해 택배로 받아 보실 수 있습니다.
        </p>
        <p>
          <a href="https://smartstore.naver.com/drj_gomtang/products/4856718842?">
            스마트 스토어에서 주문하기
          </a>
        </p>
      </article>
      <div className="layer"></div>
    </SectionStyle>
  );
};

export default Banner;

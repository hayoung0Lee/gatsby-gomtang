import React, { FC } from "react";
import styled from "styled-components";
// import Logo from "./logo";
// import MenuBar from "./menu-bar";

const SectionStyle = styled.section`
  // grid for section
  grid-column: 2 / -2;
  border-bottom: 1px solid green;
  min-height: 400px;

  font-family: "Noto Sans KR", sans-serif;

  // make section to grid container
  background: url("https://images.unsplash.com/photo-1518176258769-f227c798150e")
    center;
  background-size: cover;

  /* Grid styles */
  display: grid;
  align-items: center;
  // 공간이 있으면 1fr씩 먹고, 작아지면 240px 각각
  // auto-fit: fit as many column as possible if it fits
  // with 1fr, 전체를 채워버린다
  // auto-fit과 minmax를 함께 사용하면 언제든지 꽉 채우게 된다.
  // 아래의 예시에서는 최소 240px을 보장하고, 공간이 그러고도 남으면 서로 equally divide해서 1fr가진다
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  color: white;

  & h1 {
    text-align: center;
    font-size: 30px;
  }

  & article {
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    box-sizing: border-box;
    margin-left: 50px;
    margin-right: 50px;

    & p:first-child {
      margin-bottom: 30px;
      line-height: 24px;
      min-width: 260px;
    }
  }

  @media (max-width: 1000px) {
    // background-color: green;
    & h1 {
      padding-top: 40px;
    }

    & article {
      & p:first-child {
        margin-bottom: 40px;
      }
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

    & article {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;

const Banner: FC = () => {
  return (
    <SectionStyle>
      <h1>다락재 쉼터입니다</h1>
      <article>
        <p>
          안녕하세요, 다락재 쉼터입니다. 스마트 스토어에서도 한우곰탕을 주문하실
          수 있습니다. 군위로 놀러오세요. 안녕하세요, 다락재 쉼터입니다. 스마트
          스토어에서도 한우곰탕을 주문하실 수 있습니다. 군위로 놀러오세요
          안녕하세요, 다락재 쉼터입니다. 스마트 스토어에서도 한우곰탕을 주문하실
          수 있습니다.
        </p>
        <p>
          <a href="https://smartstore.naver.com/drj_gomtang/products/4856718842?">
            스마트 스토어에서 주문하기
          </a>
        </p>
      </article>
    </SectionStyle>
  );
};

export default Banner;

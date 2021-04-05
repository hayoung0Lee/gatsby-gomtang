import React, { FC } from "react";
import styled from "styled-components";
// import Logo from "./logo";
// import MenuBar from "./menu-bar";

const SectionStyle = styled.section`
  // grid for section
  grid-column: 2 / -2;
  border-bottom: 1px solid green;

  // make section to grid container
  //   background: url("https://images.unsplash.com/photo-1518176258769-f227c798150e")
  // center;
  background-size: cover;
  padding: 4rem 2rem;

  /* Grid styles */
  display: grid;
  align-items: center;
  // 공간이 있으면 1fr씩 먹고, 작아지면 240px 각각
  // auto-fit: fit as many column as possible if it fits
  // with 1fr, 전체를 채워버린다
  // auto-fit과 minmax를 함께 사용하면 언제든지 꽉 채우게 된다.
  // 아래의 예시에서는 최소 240px을 보장하고, 공간이 그러고도 남으면 서로 equally divide해서 1fr가진다
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

const Section: FC = () => {
  return (
    <SectionStyle>
      <h1>You thirsty?</h1>
      <article>
        <p>
          Explore local breweries with just one click and stirred by starlight
          across the centuries light years great turbulent clouds
          circumnavigated paroxysm of global death.
        </p>
        <a href="#breweries">Browse Breweries</a>
      </article>
    </SectionStyle>
  );
};

export default Section;

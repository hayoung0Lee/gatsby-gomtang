import React, { FC } from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  grid-column: 1 / -1;
  grid-row: -2 / -1;
  // border-top: 1px solid black;
  font-family: "Noto Sans KR", sans-serif;
  grid-template-columns: repeat(12, 1fr);
  // background-color: #eae7dc;
  // margin-top: 50px;
  display: grid;
  min-height: 200px;
  height: fit-content;

  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);

  & > div {
    grid-column: 2 / -2;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    gap: 20px;

    & .first {
      display: flex;
      align-items: center;

      & > p {
        height: 100px;
        width: 100px;
        background-color: #908e71;
      }
    }

    & .second {
      // border: 1px solid black;
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & > li {
        display: block;
      }
    }

    & .third {
      display: flex;
      align-items: center;

      & > p {
        height: 100px;
        width: 100px;
        background-color: #908e71;
      }
    }
  }

  @media (max-width: 885px) {
    & > div {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 2fr;
      padding-top: 20px;
      & .first {
        display: flex;
        justify-content: center;
      }

      & .second {
        grid-column: span 2;
      }

      & .third {
        display: flex;
        justify-content: center;
        grid-column: 2 / 3;
        grid-row: 1 / 2;
      }
    }
  }
`;

const Footer: FC = () => {
  return (
    <FooterStyle>
      <div>
        <div className="first">
          <p>다락재 쉼터</p>
        </div>
        <ul className="second">
          <li>대표자명: 김학규</li>
          <li>위치: 경북 군위군 군위읍 도군로 2488</li>
          <li>통신 판매업 등록번호: 2020-경북군위-14</li>
          <li>사업자 등록번호: 713 33 00399</li>
          <li>Email: yth3610@naver.com </li>
          <li>문의: 054 383 1213 / 010 9368 6758 / 010 6612 1243</li>
        </ul>
        <div className="third">
          <p>마크</p>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;

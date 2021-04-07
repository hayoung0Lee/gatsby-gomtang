import React from "react";
import Layout from "../components/layout";
// import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Container from "../components/container";

const AboutStyle = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  grid-column: 2 / -2;
  display: grid;
`;

const AboutPage = () => {
  return (
    <Layout>
      <Container>
        <AboutStyle>About Page </AboutStyle>
      </Container>
    </Layout>
  );
};

export default AboutPage;

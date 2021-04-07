import React, { useContext, useState, useReducer } from "react";
import Layout from "../components/layout";
import Container from "../components/container";
import styled from "styled-components";

const BrowseStyle = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  grid-column: 2 / -2;
  display: grid;
`;

const BrowsePage = () => {
  return (
    <Layout>
      <Container>
        <BrowseStyle>Browse Page </BrowseStyle>
      </Container>
    </Layout>
  );
};

export default BrowsePage;

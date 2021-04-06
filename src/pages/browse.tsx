import React, { useContext, useState, useReducer } from "react";
import Layout from "../components/layout";

// import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
// import Img from "gatsby-image"; // https://www.gatsbyjs.com/plugins/gatsby-image/

const BrowseLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
`;

type StateProps = {
  menu1: boolean;
  menu2: boolean;
};

type actionProps =
  | {
      type: "menu1";
    }
  | {
      type: "menu2";
    };

const BrowsePage = () => {
  return (
    <Layout>
      <div>browse</div>
    </Layout>
  );
};

export default BrowsePage;

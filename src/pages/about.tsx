import React from "react";
import Layout from "../components/layout";
import { Typography } from "@material-ui/core";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { ImgWrapper } from "../utils/common";
import Map from "../components/about/map";

const AboutLayout = styled.div`
  border: 1px solid black;
  display: grid;
  min-height: inherit;

  // repeat rows 6 times and each one is 1fr
  grid-template-rows: repeat(6, 1fr);

  // repeat columns 5 times and each one is 1fr
  grid-template-columns: repeat(5, 1fr);

  // putting gap beteween rows and columns
  grid-gap: 10px;

  & > div {
    background-color: red;
    border: 1px solid black;
    // to make text centered
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    {
      utilsJson {
        about {
          how_to_come
          map
          how_to_come_alt
        }
      }
      allFile(filter: { relativePath: { eq: "route-to-gomtang.jpeg" } }) {
        nodes {
          childImageSharp {
            fluid {
              srcSet
              src
              sizes
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <AboutLayout>
        <div>one</div>
        <div>two</div>
        <div>three</div>
        <div>four</div>
        <div>five</div>
        <div>six</div>
      </AboutLayout>
    </Layout>
  );
};

export default AboutPage;

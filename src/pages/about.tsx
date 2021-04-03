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

  & > div.medium {
    grid-row: span 2;
    grid-column: span 2;
  }

  & > div.large {
    grid-row: span 3;
    grid-column: span 3;
  }

  & > div.small {
    grid-row: span 1;
    grid-column: span 1;
  }

  & > div.tall {
    grid-row: 4 / span 3;
    grid-column: 4 / span 2;
  }

  & > div.wide {
    grid-row: span 2;
    grid-column: span 3;
  }

  & > div.two {
    background-image: url(https://source.unsplash.com/vZlTg_McCDo/800x600);
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: multiply;
    color: white;
    background-size: cover;
    background-position: top left;
    transition: all ease-in-out 300ms;
    &: hover {
      background-blend-mode: initial;
      background-position: center;
    }
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
        <div className="medium">one</div>
        <div className="large two">two</div>
        <div className="medium">three</div>
        <div className="small">four</div>
        <div className="tall">five</div>
        <div className="wide">six</div>
      </AboutLayout>
    </Layout>
  );
};

export default AboutPage;

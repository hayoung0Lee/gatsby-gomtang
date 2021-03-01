import React from "react";
import Layout from "../components/layout";
import { Typography } from "@material-ui/core";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const ImgWrapper = styled.div`
  border: 1px solid black;
  margin: auto;
  max-width: fit-content;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const AboutLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
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
        <ImgWrapper>
          <Typography variant="h5">
            {data.utilsJson.about.how_to_come}
          </Typography>
          <img
            srcSet={data.allFile.nodes[0]["childImageSharp"]["fluid"]["srcSet"]}
            sizes="(max-width: 200px) 180px,
            (max-width: 400px) 250px,
            (max-width: 800px) 450px,
            600px"
            src={data.allFile.nodes[0]["childImageSharp"]["fluid"]["src"]}
            alt={data.utilsJson.about.how_to_come_alt}
          />
        </ImgWrapper>
        <ImgWrapper>
          <Typography variant="h5">{data.utilsJson.about.map}</Typography>
          <img
            srcSet={data.allFile.nodes[0]["childImageSharp"]["fluid"]["srcSet"]}
            sizes="(max-width: 200px) 180px,
            (max-width: 400px) 250px,
            (max-width: 800px) 450px,
            600px"
            src={data.allFile.nodes[0]["childImageSharp"]["fluid"]["src"]}
            alt={data.utilsJson.about.how_to_come_alt}
          />
        </ImgWrapper>
      </AboutLayout>
    </Layout>
  );
};

export default AboutPage;

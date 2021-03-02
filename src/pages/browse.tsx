import React, { useContext } from "react";
import Layout from "../components/layout";
import { Typography } from "@material-ui/core";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { ImgWrapper } from "../utils/common";
import Loader from "../utils/loader";
import "../utils/loader.css";
const BrowseLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
`;

const BrowsePage = () => {
  const data = useStaticQuery(graphql`
    {
      utilsJson {
        browse {
          menu1
          menu2
          menu1_alt
          menu2_alt
          menu1_desc
        }
      }
      menu1: allFile(filter: { relativePath: { eq: "menu1.png" } }) {
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
      menu2: allFile(filter: { relativePath: { eq: "menu2.jpg" } }) {
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
      <BrowseLayout>
        <ImgWrapper>
          <Typography variant="h5">{data.utilsJson.browse.menu1}</Typography>
          <Loader />
          {/* <img
            srcSet={data.menu1.nodes[0]["childImageSharp"]["fluid"]["srcSet"]}
            sizes="(max-width: 200px) 180px,
            (max-width: 400px) 250px,
            (max-width: 800px) 450px,
            600px"
            src={data.menu1.nodes[0]["childImageSharp"]["fluid"]["src"]}
            alt={data.utilsJson.browse.menu1_alt}
          /> */}
          <Typography variant="h6">
            <a href="https://smartstore.naver.com/drj_gomtang/products/4856718842?">
              {data.utilsJson.browse.menu1_desc}
            </a>
          </Typography>
        </ImgWrapper>
        <ImgWrapper>
          <Typography variant="h5">{data.utilsJson.browse.menu2}</Typography>
          <img
            srcSet={data.menu2.nodes[0]["childImageSharp"]["fluid"]["srcSet"]}
            sizes="(max-width: 200px) 180px,
            (max-width: 400px) 250px,
            (max-width: 800px) 450px,
            600px"
            src={data.menu2.nodes[0]["childImageSharp"]["fluid"]["src"]}
            alt={data.utilsJson.browse.menu2_alt}
          />
        </ImgWrapper>
      </BrowseLayout>
    </Layout>
  );
};

export default BrowsePage;

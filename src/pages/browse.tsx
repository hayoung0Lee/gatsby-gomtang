import React, { useContext, useState, useReducer } from "react";
import Layout from "../components/layout";
import { Typography } from "@material-ui/core";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { ImgWrapper } from "../utils/common";
import CustomImg from "../utils/custom-img";

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

const initialState = { menu1: false, menu2: false };

function reducer(state: StateProps, action: actionProps) {
  switch (action.type) {
    case "menu1":
      return { ...state, menu1: true };
    case "menu2":
      return { ...state, menu2: true };
    default:
      throw new Error();
  }
}

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

  const [imageStatus, dispatch] = useReducer(reducer, initialState);

  return (
    <Layout>
      <BrowseLayout>
        <div>
          <Typography variant="h5">{data.utilsJson.browse.menu1}</Typography>
          <CustomImg loaded={imageStatus.menu1}>
            <img
              srcSet={data.menu1.nodes[0]["childImageSharp"]["fluid"]["srcSet"]}
              sizes="(max-width: 200px) 180px,
            (max-width: 400px) 250px,
            (max-width: 800px) 450px,
            600px"
              src={data.menu1.nodes[0]["childImageSharp"]["fluid"]["src"]}
              alt={data.utilsJson.browse.menu1_alt}
              style={{
                visibility: imageStatus.menu1 ? "visible" : "hidden",
              }}
              onLoad={() => {
                dispatch({ type: "menu1" });
              }}
            />
          </CustomImg>
          <Typography variant="h6">
            <a href="https://smartstore.naver.com/drj_gomtang/products/4856718842?">
              {data.utilsJson.browse.menu1_desc}
            </a>
          </Typography>
        </div>
        <div>
          <Typography variant="h5">{data.utilsJson.browse.menu2}</Typography>
          <CustomImg loaded={imageStatus.menu2}>
            <img
              srcSet={data.menu2.nodes[0]["childImageSharp"]["fluid"]["srcSet"]}
              sizes="(max-width: 200px) 180px,
            (max-width: 400px) 250px,
            (max-width: 800px) 450px,
            600px"
              src={data.menu2.nodes[0]["childImageSharp"]["fluid"]["src"]}
              alt={data.utilsJson.browse.menu2_alt}
              style={{
                visibility: imageStatus.menu2 ? "visible" : "hidden",
              }}
              onLoad={() => dispatch({ type: "menu2" })}
            />
          </CustomImg>
        </div>
      </BrowseLayout>
    </Layout>
  );
};

export default BrowsePage;

import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Map from "../components/map";

const AboutPage = () => {
  return (
    <Layout>
      <div>
        about
        <Map />
      </div>
    </Layout>
  );
};

export default AboutPage;

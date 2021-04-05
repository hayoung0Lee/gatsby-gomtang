import React, { FC } from "react";
import Layout from "../components/layout";
import Banner from "../components/banner";

const IndexPage: FC<React.ReactNode> = ({ children }) => {
  return (
    <Layout>
      <Banner />
      <section>index content</section>
    </Layout>
  );
};

export default IndexPage;

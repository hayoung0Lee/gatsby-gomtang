import React, { FC } from "react";
import Layout from "../components/layout";

const IndexPage: FC<React.ReactNode> = ({ children }) => {
  return (
    <Layout>
      <div>Index Page</div>
    </Layout>
  );
};

export default IndexPage;

import React, { FC } from "react";
import styled from "styled-components";

const Main: FC<React.ReactNode> = ({ children }) => {
  return <main>{children}</main>;
};

export default Main;

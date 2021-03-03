import React, { useContext, useState, FC } from "react";
import Loader from "./loader";
import { ImgWrapper } from "./common";

type CustomImgProps = {
  children: React.ReactNode;
  loaded: boolean;
};
const CustomImg: FC<CustomImgProps> = ({ children, loaded }) => {
  return (
    <ImgWrapper>
      {!loaded && <Loader />}
      {children}
    </ImgWrapper>
  );
};

export default CustomImg;

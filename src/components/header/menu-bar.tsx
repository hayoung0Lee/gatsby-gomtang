import React, { useState, FC } from "react";
import { useMediaQuery } from "react-responsive";
import SmallerMenu from "./smaller-menu";
import BiggerMenu from "./bigger-menu";

const MenuBar = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1100px)" });

  return <>{isBigScreen ? <BiggerMenu /> : <SmallerMenu />}</>;
};

export default MenuBar;

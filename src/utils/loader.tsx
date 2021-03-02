import React, { useContext, FC } from "react";
import "./loader.css";

const Loader: FC<React.ReactNode> = ({ children }) => {
  return <div className="loader">{children}</div>;
};

export default Loader;

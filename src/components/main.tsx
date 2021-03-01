import React, { FC } from "react";

const Main: FC<React.ReactNode> = ({ children }) => {
  return (
    <main>
      This is Main
      {children}
    </main>
  );
};

export default Main;

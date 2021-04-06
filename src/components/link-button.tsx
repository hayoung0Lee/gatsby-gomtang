import React, { ReactNode } from "react";
import { Link } from "gatsby";

const LinkButton = ({
  to,
  activeStyle,
  children,
}: {
  to: string;
  children: ReactNode;
  activeStyle?: React.CSSProperties;
}) => {
  if (activeStyle) {
    return (
      <>
        <Link
          to={to}
          style={{
            textDecoration: "none",
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: `"Noto Sans KR", sans-serif`,
          }}
          activeStyle={activeStyle}
        >
          <span>{children}</span>
        </Link>
      </>
    );
  }
  return (
    <>
      <Link
        to={to}
        style={{
          textDecoration: "none",
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: `"Noto Sans KR", sans-serif`,
        }}
      >
        <span>{children}</span>
      </Link>
    </>
  );
};

export default LinkButton;

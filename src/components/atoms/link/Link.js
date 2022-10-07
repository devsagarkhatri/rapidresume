import React from "react";
import { Link as PDFLink } from "@react-pdf/renderer";

const Link = ({ platform, href, children, style }) => {
  if (platform === "pdf") {
    return (
      <PDFLink src={href} style={style}>
        {children}
      </PDFLink>
    );
  }

  return (
    <a target="_blank" rel="noreferrer" href={href} style={style}>
      {children}
    </a>
  );
};

export default Link;

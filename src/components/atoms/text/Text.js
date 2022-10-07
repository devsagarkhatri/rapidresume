import React from "react";
import { Text as PDFText } from "@react-pdf/renderer";

const Text = ({ platform, as, children, style }) => {
  if (platform === "pdf") {
    return <PDFText style={style}>{children}</PDFText>;
  }

  return React.createElement(as || "p", { style: style }, children);
};

export default Text;

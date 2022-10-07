import React from "react";
import { Text } from "@react-pdf/renderer";

//inline styles
// import getInlineStyles from "../../jss/GlobalStyles";

const SectionHeader = ({ className, text, updateModal, platform }) => {
  if (platform === "pdf") {
    return <Text style={getInlineStyles("sectionHeader")}>{text}</Text>;
  }

  return (
    <h4 style={getInlineStyles("sectionHeader")} className={className}>
      {text}
      {updateModal}
    </h4>
  );
};

export default SectionHeader;

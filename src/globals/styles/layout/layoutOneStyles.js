import { isWindow } from "../../global";

const styles = (condition) => {
  if (!isWindow()) return;

  const sidebarWidth = condition?.isPDF ? "300pt" : "250pt";

  return {
    resumeSections: {
      paddingLeft: condition?.sidebarVisible ? "10pt" : "0pt",
      width: condition?.sidebarVisible
        ? `calc(100% - ${sidebarWidth})`
        : "100%",
    },
    sidebar: {
      width: condition?.sidebarVisible ? sidebarWidth : "100%",
      display: "flex",
      flexDirection: "column",
      borderRight:
        condition?.sidebarVisible && !condition.isPDF
          ? "1pt solid #C8C8C8"
          : "none",
      paddingRight: condition?.sidebarVisible ? "10pt" : "",
    },
  };
};

export default styles;

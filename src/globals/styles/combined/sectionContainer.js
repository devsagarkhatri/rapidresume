import {
  // getCSSVarValue,
  // convertRemToPixels,
  isWindow,
} from "../../global";

const styles = () => {
  if (!isWindow()) return {};

  // const baseFontFamily = getCSSVarValue("--primary-font-family").trim();
  // const secondaryColor = getCSSVarValue("--secondary-color").trim();
  // const baseFontSize = getCSSVarValue("--base-font-size")
  //   .trim()
  //   .replace("pt", "");

  return {
    sectionContainer: {
      width: "100%",
      marginTop: "20pt",
    },
  };
};

export default styles;

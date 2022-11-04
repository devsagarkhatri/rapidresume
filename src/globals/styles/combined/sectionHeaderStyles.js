import {
  getCSSVarValue,
  convertRemToPixels,
  isWindow,
} from "../../global";

const styles = () => {
  if (!isWindow()) return {};

  const baseFontFamily = getCSSVarValue("--primary-font-family").trim();
  const secondaryColor = getCSSVarValue("--secondary-color").trim();
  const baseFontSize = getCSSVarValue("--base-font-size")
    .trim()
    .replace("pt", "");

  return {
    sectionHeader: {
      color: secondaryColor,
      fontSize: convertRemToPixels(0.7) + "pt",
      fontWeight: 700,
      fontFamily: `${baseFontFamily}Medium`,
      marginBottom: baseFontSize / 4 + "pt",
      textTransform: "uppercase",
      wordBreak: "break-all",
    },
  };
};

export default styles;

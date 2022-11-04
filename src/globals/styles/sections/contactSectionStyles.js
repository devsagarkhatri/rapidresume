import {
  getCSSVarValue,
  convertRemToPixels,
  isWindow,
} from "../../global";

const styles = () => {
  if (!isWindow()) return;

  const baseFontFamily = getCSSVarValue("--primary-font-family").trim();
  const primaryColor = getCSSVarValue("--primary-color").trim();
  const secondaryColor = getCSSVarValue("--secondary-color").trim();

  return {
    contactOption: {
      display: "flex",
      justifyContent: "spaceBetween",
      flexDirection: "row",
      alignItems: "flexStart",
      marginBottom: "8pt",
    },
    contactInfo: {
      margin: "0",
      fontSize: convertRemToPixels(0.5) + "pt",
      wordBreak: "break-word",
      width: "100%",
      color: secondaryColor,
      fontFamily: `${baseFontFamily}Regular`,
    },
    contactIcon: {
      color: primaryColor,
      marginRight: "5pt",
      width: "12pt",
      height: "12pt",
      fill: primaryColor,
      stroke: primaryColor,
    },
  };
};

export default styles;

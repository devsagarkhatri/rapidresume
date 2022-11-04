import {
  getCSSVarValue,
  convertRemToPixels,
  isWindow,
} from "../../global";

const styles = (condition) => {
  if (!isWindow()) return;

  const baseFontFamily = getCSSVarValue("--primary-font-family").trim();
  const primaryColor = getCSSVarValue("--primary-color").trim();
  const secondaryColor = getCSSVarValue("--secondary-color").trim();
  const baseFontSize = getCSSVarValue("--base-font-size")
    .trim()
    .replace("pt", "");

  return {
    backgroundContainer: {
      marginTop: condition.isPDF
        ? baseFontSize / 3.5 + "pt"
        : baseFontSize / 2 + "pt",
    },
    mainTitle: {
      color: primaryColor,
      fontFamily: `${baseFontFamily}Bold`,
      fontSize: convertRemToPixels(0.57) + "pt",
      marginBottom: "5pt",
      lineHeight: 1,
    },
    subTitle: {
      color: secondaryColor,
      fontFamily: `${baseFontFamily}Medium`,
      fontSize: convertRemToPixels(0.48) + "pt",
      lineHeight: 1,
      marginBottom: "8pt",
      textTransform: "uppercase",
    },
    backgroundDetailsContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "start",
    },
    backgroundDetail: {
      color: secondaryColor,
      fontFamily: `${baseFontFamily}Regular`,
      fontSize: convertRemToPixels(0.5) + "pt",
      fontWeight: 800,
      lineHeight: 1.4,
      marginBottom: "4pt",
    },
    backgroundListContainer: {
      listStyleType: "none",
      marginLeft: "1pt",
    },
    backgroundDetailPoint: {
      width: "3.5pt",
      height: "3.5pt",
      backgroundColor: primaryColor,
      borderRadius: "100%",
      marginRight: "6pt",
      marginTop: "5pt",
    },
    backgroundDetailDatesContainer: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
    },
    backgroundDetailDates: {
      color: secondaryColor,
      fontFamily: `${baseFontFamily}Medium`,
      fontSize: convertRemToPixels(0.4) + "pt",
    },
  };
};

export default styles;

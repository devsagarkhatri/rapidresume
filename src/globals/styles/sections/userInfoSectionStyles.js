import {
  getCSSVarValue,
  convertRemToPixels,
  isWindow,
} from "../../global";

const styles = (condition) => {
  if (!isWindow()) return;

  const { isPDF, isImagePresent } = condition;

  const baseFontFamily = getCSSVarValue("--primary-font-family").trim();
  const primaryColor = getCSSVarValue("--primary-color").trim();
  const secondaryColor = getCSSVarValue("--secondary-color").trim();

  const userInfoContainerPadding = {
    top: "25pt",
    bottom: "25pt",
  };

  if (isPDF && !isImagePresent) {
    userInfoContainerPadding.top = "30pt";
  } else if (isPDF && isImagePresent) {
    userInfoContainerPadding.bottom = "35pt";
  }

  return {
    userInfoContainer: {
      display: "flex",
      flexDirection: "row",
      paddingTop: userInfoContainerPadding.top,
      paddingBottom: userInfoContainerPadding.bottom,
      borderBottom: isPDF ? "0.7pt solid #C8C8C8" : "1pt solid #C8C8C8",
      alignItems: "center",
    },
    name: {
      fontSize: convertRemToPixels(1.5) + "pt",
      color: primaryColor,
      fontWeight: 700,
      fontFamily: `${baseFontFamily}Black`,
      margin: 0,
      textTransform: "capitalize",
    },
    profession: {
      color: secondaryColor,
      fontSize: convertRemToPixels(0.8) + "pt",
      fontWeight: 500,
      fontFamily: `${baseFontFamily}Regular`,
      wordBreak: "breakWord",
      margin: 0,
      textTransform: "uppercase",
    },
    imageStyles: {
      objectFit: "cover",
      width: `130pt`,
      height: `130pt`,
      borderRadius: "100%",
      objectPosition: "center center",
      marginRight: "25pt",
    },
  };
};

export default styles;

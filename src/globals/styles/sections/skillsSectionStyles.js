import {
  getCSSVarValue,
  convertRemToPixels,
  isWindow,
} from "../../global";

const styles = () => {
  if (!isWindow()) return;

  const baseFontFamily = getCSSVarValue("--primary-font-family").trim();
  // const primaryColor = getCSSVarValue("--primary-color").trim();
  const secondaryColor = getCSSVarValue("--secondary-color").trim();

  return {
    skillsContainer: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "flex-start",
      flexDirection: "row",
      overflowWrap: "breakWord",
    },
    skillLabel: {
      backgroundColor: "#f1f5f9",
      color: secondaryColor,
      padding: "5pt",
      fontSize: convertRemToPixels(0.4) + "pt",
      borderRadius: "3pt",
      marginRight: "7pt",
      marginBottom: "7pt",
      fontFamily: `${baseFontFamily}Bold`,
      textAlign: "center",
    },
  };
};

export default styles;

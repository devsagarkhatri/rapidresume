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
    profileContainer: {
      height: "30%",
    },
    profile: {
      color: secondaryColor,
      fontSize: convertRemToPixels(0.5) + "pt",
      fontWeight: 800,
      fontFamily: `${baseFontFamily}Regular`,
      lineHeight: "1.5",
    },
  };
};

export default styles;

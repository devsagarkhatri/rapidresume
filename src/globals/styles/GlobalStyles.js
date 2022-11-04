/*
 * Reason behind add styles in this format is
 * 1) React PDF does not allow to add classes so we cannot use tailwind or scss
 * 2) I wanted to make sure that we use the same styling in PDF viewer and web viewer resume.
 *
 * So adding styles this way, we can use the same styles in PDF and Web.
 */

import {
  getCSSVarValue,
  // convertRemToPixels,
  isWindow
} from "../global";

//sections
import userInfoStyles from "./sections/userInfoSectionStyles";
import contactSectionStyles from "./sections/contactSectionStyles";
import skillsSectionStyles from "./sections/skillsSectionStyles";
import backgroundDetailsSectionStyles from "./sections/backgroundDetailsSectionStyles";
import profileSectionStyles from "./sections/profileSectionStyles";
import sectionContainer from "./combined/sectionContainer";

// combined styles
import sectionHeaderStyles from "./combined/sectionHeaderStyles";

//layout styles
import layoutOneStyles from "./layout/layoutOneStyles";

const getInlineStyles = (field, condition = {}) => {
  if (!isWindow()) return;

  const baseFontFamily = getCSSVarValue("--primary-font-family").trim();
  // const primaryColor = getCSSVarValue("--primary-color").trim();
  // const secondaryColor = getCSSVarValue("--secondary-color").trim();

  const styles = {
    ...userInfoStyles(condition),
    ...contactSectionStyles(condition),
    ...sectionHeaderStyles(condition),
    ...skillsSectionStyles(condition),
    ...backgroundDetailsSectionStyles(condition),
    ...profileSectionStyles(condition),
    ...layoutOneStyles(condition),
    ...sectionContainer(condition),
    resumeViewerHeader: {
      fontFamily: `${baseFontFamily}Black`,
    },
    resumeSectionContainer: {
      marginTop: "15pt",
      display: "flex",
      width: "100%",
      flexDirection: "row",
    },
  };

  return styles[field];
};

export default getInlineStyles;

import React, { useRef, useState, useEffect } from "react";
import ContentEditable from "react-contenteditable";
import { Text } from "@react-pdf/renderer";

const SectionContent = ({
  placeholder,
  initialValue,
  className,
  styles,
  actionType,
  dispatch,
  platform,
}) => {
  const [focused, setFocused] = useState(false);
  const contentEditable = useRef(null);

  const handleChange = (e) => {
    if (containsHTML(e.target.value)) {
      const content = removeHTML(e.target.value).replace(/[^\x00-\x7F]/g, "");
      dispatch({
        type: actionType,
        payload: content,
      });
    } else {
      dispatch({
        type: actionType,
        payload: e.target.value,
      });
    }
  };

  useEffect(() => {
    if (platform !== "pdf") {
      dispatch({
        type: actionType,
        payload: initialValue,
      });
    }
  }, []);

  if (platform === "pdf") {
    return <Text style={styles}>{replaceNBSPWithSpace(initialValue)}</Text>;
  }

  const showPlaceholder = !initialValue && !focused;
  return (
    <ContentEditable
      innerRef={contentEditable}
      html={showPlaceholder ? placeholder : initialValue}
      disabled={false}
      onChange={handleChange}
      tagName="h1"
      style={styles}
      className={`${className} outline-none 
          ${focused ? `bg-gray-400` : ""} 
          ${showPlaceholder ? "text-gray-400" : ""}
          `}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
};

export default SectionContent;

import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";

const VerticalLine = ({
  height,
  minHeight,
  width,
  color,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}) => {
  const styles = StyleSheet.create({
    verticalLine: {
      height: height,
      minHeight: minHeight,
      width: width,
      backgroundColor: color,
      marginTop: marginTop,
      marginBottom: marginBottom,
      marginLeft: marginLeft,
      marginRight: marginRight,
    },
  });
  return <View style={styles.verticalLine}></View>;
};

export default VerticalLine;

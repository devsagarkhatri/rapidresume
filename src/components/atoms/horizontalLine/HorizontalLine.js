import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";

const HorizontalLine = ({
  height,
  width,
  color,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}) => {
  const styles = StyleSheet.create({
    horizontalLine: {
      height: height,
      width: width,
      backgroundColor: color,
      marginTop: marginTop,
      marginBottom: marginBottom,
      marginLeft: marginLeft,
      marginRight: marginRight,
    },
  });
  return <View style={styles.horizontalLine}></View>;
};

export default HorizontalLine;

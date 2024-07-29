import React from "react";
import { StyleSheet, Text } from "react-native";

function Title({children}) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    // color: "",
    textAlign: "center",
    borderWidth: 2,
    // borderColor: "",
    padding: 12,
  },
});

export default Title;

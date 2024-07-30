import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Colors from "../../constants/Colors";

function Title({ children }) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginHorizontal: 24,
    backgroundColor: Colors.accentDarkBlue,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    padding: 12,
    fontSize: 30,
    color: Colors.white,
    textAlign: "center",
  },
});

export default Title;

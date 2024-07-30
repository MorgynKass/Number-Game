import { View, Text, TextInput, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginHorizontal: 24,
    padding: 25,
    backgroundColor: Colors.accentDarkBlue,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,

    // visual testing
    // borderWidth: 2,
    // borderColor: "red",
  },
});

export default Card;

import { View, StyleSheet } from "react-native";

function ButtonContainer({ children }) {
  return <View style={styles.buttonContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 4,
  },
});

export default ButtonContainer;

import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 24,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: Colors.accentLightBlue,
    borderRadius: 8,
  },
  numberText: {
    color: Colors.accentLightBlue,
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default NumberContainer;

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
    marginTop: 40,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    padding: 30,
    color: Colors.accentDarkBlue,
    fontSize: 40,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: Colors.white,
    borderRadius: 55,
  },
});

export default NumberContainer;

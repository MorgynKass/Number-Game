import { StyleSheet, Text } from "react-native";

import Colors from "../../constants/Colors";

function InstructionText({ children }) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.white,
    fontSize: 20,
  },
});

export default InstructionText;

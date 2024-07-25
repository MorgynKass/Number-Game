import { TextInput, View, StyleSheet } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

function StartScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
        returnKeyType="done"
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#0b2544",
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
  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#FFCBCB",
    borderBottomWidth: 2,
    color: "#FFCBCB",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",

    // visual testing
    // borderWidth: 2,
    // borderColor: "red",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  button: {
    flex: 1,
  },
});

export default StartScreen;

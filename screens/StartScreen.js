import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

function StartScreen() {
  const [enteredNumber, setEnteredNumber] = useState("");

  function inputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const number = parseInt(enteredNumber);

    if (isNaN(number) || number == 0 || number > 99) {
      Alert.alert("Invalid number", "Must be a number between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);

      return;
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
        returnKeyType="done"
        value={enteredNumber}
        onChange={inputHandler}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
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

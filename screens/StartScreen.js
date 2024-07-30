import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";

import Card from "../components/ui/Card";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import ButtonContainer from "../components/ui/ButtonContainer";

import Colors from "../constants/Colors";
import InstructionText from "../components/ui/InstructionText";

function StartScreen({ onNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function inputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const number = parseInt(enteredNumber);

    if (isNaN(number) || number <= 0 || number > 99) {
      Alert.alert("Invalid number", "Must be a number between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);

      console.log(number);
      return;
    }

    onNumber(number);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <View style={styles.innerInputContainer}>
          <TextInput
            style={styles.input}
            maxLength={2}
            keyboardType="number-pad"
            autoCorrect={false}
            returnKeyType="done"
            value={enteredNumber}
            onChangeText={inputHandler}
          />
        </View>
        <ButtonContainer style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </ButtonContainer>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
  },
  innerInputContainer: {
    width: 100,
    height: 60,
    alignItems: "center",
    marginTop: 11,
    backgroundColor: Colors.accentLightBlue,
    borderRadius: 10,
  },
  input: {
    height: 40,
    width: 55,
    marginVertical: 9,
    fontSize: 35,
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 2,
    color: Colors.secondary,
    fontFamily: "Montserrat_700Bold",
    fontWeight: "bold",
    textAlign: "center",

    // visual testing
    // borderWidth: 2,
    // borderColor: "red",
  },
  button: {
    flex: 1,
  },
});

export default StartScreen;

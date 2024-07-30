import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import ButtonContainer from "../components/ui/ButtonContainer";
import InstructionText from "../components/ui/InstructionText";

import Colors from "../constants/Colors";

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const [currentGuess, setCurrentGuess] = useState(() =>
    generateRandomNumber(minBoundary, maxBoundary)
  );

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      console.log(currentGuess, userNumber, minBoundary, maxBoundary);
      Alert.alert("Don't lie!", "The computer knows that's not right.", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    setCurrentGuess(generateRandomNumber(minBoundary, maxBoundary));
  }

  return (
    <View style={styles.root}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or Lower?</InstructionText>
        <ButtonContainer>
          <View style={styles.buttonInnerContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("higher")}>
              <Ionicons name="add" size={20} color={Colors.white} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonInnerContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="remove" size={20} color={Colors.white} />
            </PrimaryButton>
          </View>
        </ButtonContainer>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 100,
  },
  buttonInnerContainer: {
    flex: 1,
  },
});

export default GameScreen;

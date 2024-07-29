import { useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber }) {
  const [currentGuess, setCurrentGuess] = useState(() =>
    generateRandomNumber(minBoundary, maxBoundary)
  );

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
    <View style={styles.gameContainer}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        <View>
          <PrimaryButton onPress={() => nextGuessHandler("higher")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            -
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    padding: 40,
  },
});

export default GameScreen;

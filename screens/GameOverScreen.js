import { Text, View, Image, StyleSheet } from "react-native";

import Title from "../components/ui/Title";

import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import ButtonContainer from "../components/ui/ButtonContainer";
import Card from "../components/ui/Card";

function GameOverScreen({ userNumber }) {
  return (
    <View style={styles.root}>
      <Title>Game Over!</Title>
      <Card style={styles.gameOverCard}>
        <Text style={styles.mainText}>
          Computer guessed <Text style={styles.subText}>{userNumber}</Text> in
          <Text style={styles.subText}>Y</Text> rounds.
        </Text>
        <ButtonContainer>
          <View style={styles.button}>
            <PrimaryButton>Start New Game</PrimaryButton>
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
  mainText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 20,
    textAlign: "center",
    color: Colors.secondary,
  },
  subText: {
    fontFamily: "Montserrat_700Bold",
    color: Colors.white,
  },
  button: { flex: 1 },
});

export default GameOverScreen;

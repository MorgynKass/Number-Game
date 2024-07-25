import { StyleSheet, View, Text } from "react-native";
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.gameContainer}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or Lower</Text>
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

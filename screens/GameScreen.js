import { StyleSheet, View, Text } from "react-native";

function GameScreen() {
  return (
    <View style={styles.gameContainer}>
      <Text>Opponent's Guess</Text>
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

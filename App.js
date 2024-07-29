import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function startGameHandler(number) {
    setUserNumber(number);
  }

  let screen = <StartScreen onNumber={startGameHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary, Colors.secondary]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImg}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,

    // visual testing
    // borderWidth: 2,
    // borderColor: "red",
  },
  backgroundImg: {
    opacity: 0.25,
  },
});

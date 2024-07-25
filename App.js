import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartScreen from "./screens/StartScreen";

export default function App() {
  return (
    <LinearGradient colors={["#102C57", "#FFCBCB"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImg}
      >
        <StartScreen />
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
  }
});

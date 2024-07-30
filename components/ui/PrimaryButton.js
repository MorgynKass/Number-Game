import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

function PrimaryButton({ children, onPress, style }) {
  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.buttonPressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#FFCBCB" }}
      >
        <Text style={styles.button}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
    elevation: 2,
  },
  buttonInnerContainer: {
    backgroundColor: Colors.accentLightBlue,
    paddingVertical: 8,
  },
  button: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 15,
    fontFamily: "Montserrat_400Regular",
  },
  buttonPressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;

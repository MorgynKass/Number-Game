import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
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
    paddingHorizontal: 16,
  },
  button: {
    color: Colors.white,
    textAlign: "center",
  },
  buttonPressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;

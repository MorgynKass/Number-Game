import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function buttonHandler() {
    console.log("Pressed");
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.buttonPressed]
            : styles.buttonInnerContainer
        }
        onPress={buttonHandler}
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
    backgroundColor: "#434d6d",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  button: {
    color: "#ffffff",
    textAlign: "center",
  },
  buttonPressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;

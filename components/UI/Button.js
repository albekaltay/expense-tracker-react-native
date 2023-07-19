import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

const Button = ({ children, mode, ...props }) => {
  return (
    <View style={mode !== "flat" && styles.container}>
      <Pressable
        style={({ pressed }) =>
          pressed && (mode === "flat" ? styles.flatPessed : styles.pressed)
        }
        {...props}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    backgroundColor: "#191970",
  },
  innerContainer: {
    padding: 8,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.5,
  },
  flatPessed: {
    backgroundColor: "#CBC3E3",
    borderRadius: 4,
  },
});

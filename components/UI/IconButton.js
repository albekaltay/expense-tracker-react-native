import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
import { View } from "react-native";

const IconButton = ({ icon, size, color, ...props }) => {
  return (
    <Pressable {...props} style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
        <Entypo name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  buttonContainer: {
    padding: 8,
    marginHorizontal: 5,
  },
});

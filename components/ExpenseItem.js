import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import dayjs from "dayjs";
import { useNavigation } from "@react-navigation/native";

var localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

const ExpenseItem = ({ expenses }) => {
  const { id, description, date, amount } = expenses;
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("ManageExpense", { expenseId: id })}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.date}>{dayjs(date.toString()).format("LL")}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  container: {
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#191970",
    marginBottom: 4,
  },
  description: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  date: {
    color: "white",
  },
  amountContainer: {
    borderRadius: 6,
    backgroundColor: "white",
    padding: 8,
    minWidth: 80,
    alignItems: "center",
  },
  amount: {
    color: "black",
  },
});

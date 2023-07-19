import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses?.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#CBC3E3",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    borderRadius: 6,
  },
  period: {
    fontSize: 12,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

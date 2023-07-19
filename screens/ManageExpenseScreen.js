import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext, useLayoutEffect } from "react";
import { Entypo } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/context/expenses-ctx";

const ManageExpenseScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const expenseCtx = useContext(ExpensesContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edited Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const cancelHandler = () => {
    navigation.goBack();
  };
  const updateHandler = (id, item) => {
    expenseCtx.updateExpense(id, item);
    navigation.goBack();
  };
  const addHandler = () => {
    const item = {
      name: "Test Add",
      description: "test add",
      amount: 14.3,
      date: new Date(),
    };
    expenseCtx.addExpennse(item);
    navigation.goBack();
  };
  const deleteHandler = (id) => {
    expenseCtx.deleteExpense(id);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button onPress={cancelHandler} mode="flat">
          Cancel
        </Button>
        {isEditing ? (
          <Button
            onPress={() =>
              updateHandler(editedExpenseId, {
                name: "Test Update",
                amount: 14.3,
                description: "test update",
                date: new Date("2022-07-22"),
              })
            }
          >
            Update
          </Button>
        ) : (
          <Button onPress={addHandler}> Add </Button>
        )}
      </View>

      {isEditing && (
        <Pressable onPress={() => deleteHandler(editedExpenseId)}>
          <View style={styles.deleteContainer}>
            <Entypo name="trash" size={28} color="#cd6078" />
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default ManageExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#2b56c5",
  },
  deleteContainer: {
    padding: 12,
    alignItems: "center",
    borderTopWidth: 2,
    borderTopColor: "#cd6078",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 20,
    justifyContent: "center",
  },
});

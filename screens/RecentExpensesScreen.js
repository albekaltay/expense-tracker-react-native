import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpensesContext } from "../store/context/expenses-ctx";

const RecentExpensesScreen = () => {
  const expenseCtx = useContext(ExpensesContext);
  const { expenses } = expenseCtx;

  const currentDate = new Date();
  let sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(currentDate.getDate() - 7);
  const filteredExpenses = expenses.filter(
    (expense) => expense.date >= sevenDaysAgo
  );

  return (
    <ExpensesOutput
      expenses={filteredExpenses}
      expensesPeriod={"Last 7 Days"}
    />
  );
};

export default RecentExpensesScreen;

import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpensesContext } from "../store/context/expenses-ctx";

const AllExpensesScreen = () => {
  const expenseCtx = useContext(ExpensesContext);
  const { expenses } = expenseCtx;
  return <ExpensesOutput expenses={expenses} expensesPeriod={"Total"} />;
};

export default AllExpensesScreen;

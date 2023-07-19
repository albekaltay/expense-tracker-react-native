import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A book",
    amount: 14.3,
    date: new Date("2022-10-05"),
  },
  {
    id: "e2",
    description: "Mouse",
    amount: 20.5,
    date: new Date("2022-02-01"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 9.99,
    date: new Date("2022-05-02"),
  },
  {
    id: "e4",
    description: "Another Book",
    amount: 14.3,
    date: new Date("2022-07-22"),
  },
  {
    id: "e5",
    description: "A book",
    amount: 14.3,
    date: new Date("2022-10-05"),
  },
  {
    id: "e6",
    description: "Mouse",
    amount: 20.5,
    date: new Date("2022-02-01"),
  },
  {
    id: "e7",
    description: "Some bananas",
    amount: 9.99,
    date: new Date("2023-07-15"),
  },
  {
    id: "e8",
    description: "Another Book",
    amount: 14.3,
    date: new Date("2022-07-22"),
  },
  {
    id: "e9",
    description: "A book",
    amount: 14.3,
    date: new Date("2022-10-05"),
  },
  {
    id: "e10",
    description: "Mouse",
    amount: 20.5,
    date: new Date("2022-02-01"),
  },
  {
    id: "e11",
    description: "Some bananas",
    amount: 9.99,
    date: new Date("2022-05-02"),
  },
  {
    id: "e12",
    description: "Another Book",
    amount: 14.3,
    date: new Date("2022-07-22"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpennse: (item) => {},
  updateExpense: (id, item) => {},
  deleteExpense: (id) => {},
});

const ExpensesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, DUMMY_EXPENSES);

  function reducer(state, action) {
    switch (action.type) {
      case "ADD_EXPENSE": {
        return [...state, action.addedItem];
      }
      case "UPDATE_EXPENSE": {
        console.log(action.id);
        console.log(action.item);

        const findUpdadatebleIndex = state.findIndex(
          (item) => item.id === action.id
        );
        state[findUpdadatebleIndex] = {
          ...state[findUpdadatebleIndex],
          ...action.item,
        };
        const filteredItem = state.filter(item => item.id !== action.id)
        return [...filteredItem, state[findUpdadatebleIndex]];
      }
      case "DELETE_EXPENSE": {
        state = state.filter((item) => item.id !== action.id);
        return state;
      }
    }
    return state;
  }

  const addExpenseHandler = (item) => {
    const id = "id" + Math.random().toString(16).slice(2);
    const date = new Date();
    const addedItem = { ...item, id, date };
    dispatch({ type: "ADD_EXPENSE", addedItem });
  };

  const updateExpenseHandler = (id, item) => {
    console.log(state);
    dispatch({ type: "UPDATE_EXPENSE", id, item });
  };

  const deleteExpenseHandler = (id) => {
    dispatch({ type: "DELETE_EXPENSE", id });
  };

  const value = {
    expenses: state,
    addExpennse: addExpenseHandler,
    updateExpense: updateExpenseHandler,
    deleteExpense: deleteExpenseHandler,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;

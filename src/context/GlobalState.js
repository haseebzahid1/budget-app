import { createContext, useReducer } from "react"
import AppReducer from "./AppReducer"

const initialState = {
  incomeTransactions: [
    { id: 1, incomeText: "Car sold", incomeAmount: 15000 },
    { id: 2, incomeText: "Salary", incomeAmount: 15000 },
    { id: 3, incomeText: "Bouns", incomeAmount: 15000 },
  ],
  expenseTransactions: [
    { id: 4, incomeText: "Rent", incomeAmount: 1000 },
    { id: 5, incomeText: "Bank", incomeAmount: 2000 },
    { id: 6, incomeText: "Cloths", incomeAmount: 500 },
  ]
}


export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = id => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  };

  const addIncome = incomeTransaction => {
    dispatch({
      type: "ADD_INCOME",
      payload: incomeTransaction
    });
  };

  const addExpense = expenseTransaction => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expenseTransaction
    });
  };




  return (
    <GlobalContext.Provider 
    value={{
      incomeTransactions: state.incomeTransactions,
      expenseTransactions: state.expenseTransactions,
      addIncome,
      addExpense,
      deleteTransaction,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}






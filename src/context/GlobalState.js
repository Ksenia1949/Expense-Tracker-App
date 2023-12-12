import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
//Initial state

const initialState = {
    transactions: [
        {id: 1, text: 'MacBook Pro', amount: -1500},
        {id: 2, text: 'income', amount: 10000},
        {id: 3, text: 'Education', amount: -1000},
        {id: 4, text: 'Apple Display', amount: -1250},
    ]
}
//Create context
export const GlobalContext = createContext(initialState)

//Provider component
export const GlobalProvider = ({children}) =>{
   const [state,dispatch] = useReducer(AppReducer, initialState);


   //Actions

function addTransaction(transaction){
  dispatch({
    type: 'ADD_TRANSACTION',
    payload: transaction

  })
}

function deleteTransaction(id){
  dispatch({
    type: 'DELETE_TRANSACTION',
    payload: id

  })
}

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
    </GlobalContext.Provider>)
}

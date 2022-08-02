import React from 'react'
import { useReducer } from 'react'

const reducer = (state, action) =>{
    switch(action.type){
        case "DEPOSIT":
            return state + action.payload;
        case "WITHDRAW":
            return state - action.payload;
    }
};

export default function ComponentWithUseReducer() {

    const deposit = (amount) => {
        dispatch({
            type: "DEPOSIT",
            payload: amount,
        })
    }

    const  withdraw = (amount) => {
        dispatch({
            type: "WITHDRAW",
            payload: amount,
        })
    }


    const [amount, dispatch] = useReducer(reducer,500);
  return (
    <div>
        <h1>{amount}</h1>
        <button onClick={() => deposit(500)}>Deposit</button>
        <button onClick={() => withdraw(500)}>Withdraw</button>
    </div>
  )
}

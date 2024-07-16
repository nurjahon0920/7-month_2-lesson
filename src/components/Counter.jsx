import React, { useReducer } from "react";

const initialState = {
  first: 10,
  secondcount: 20,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        first: state.first + 1,
      };
    case "decrement":
      return {
        first: state.first - 1,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count: {count.first}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default Counter;

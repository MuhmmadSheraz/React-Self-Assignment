import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return initialState;
      default: return state
  }
};
let Reducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
      <>
      Conuter : {count}
      <button onClick={()=>dispatch('inc')}>Add</button>
      <button onClick={()=>dispatch('dec')}>Sub</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
      </>
  )
};

export default Reducer;

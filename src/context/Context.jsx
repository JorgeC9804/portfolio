import React, { createContext, useReducer } from "react";

const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "TRUE":
      return action.payload.status;
    case "FALSE":
      return action.payload.status;
    default:
      return state;
  }
};

const Reducer = initialState => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch,
  };
};

const ContextProvider = ({ children }) => {
  const { state, dispatch } = Reducer(false);

  const options = {
    state,
    dispatch,
  };

  return <Context.Provider value={options}>{children}</Context.Provider>;
};

export { ContextProvider };
export default Context;

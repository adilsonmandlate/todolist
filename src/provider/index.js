import React, { createContext, useContext, useReducer } from "react";
import { getLocalState, setLocalState } from "./localStorage";
import { initialState, reducer } from "./reducer";

const AppContext = createContext();

export const useAppState = () => {
  return useContext(AppContext);
};

const isToday = (date) => {
  if (!date) {
    return false;
  }

  const today = new Date();
  const compareDate = new Date(date);

  return (
    today.getUTCFullYear() === compareDate.getUTCFullYear() &&
    today.getUTCMonth() === compareDate.getUTCMonth() &&
    today.getUTCDate() === compareDate.getUTCDate()
  );
};

export const useTodos = () => {
  const [state] = useAppState();

  const today = state.todos.filter((todo) => isToday(todo.date));
  const late = state.todos.filter((todo) => !isToday(todo.date));

  return { today, late };
};

export const useLabels = () => {
  const [state] = useAppState();

  return state.labels;
};

export const StateProvider = ({ children }) => {
  let reducerInitialState = getLocalState();

  if (reducerInitialState === undefined) {
    reducerInitialState = initialState;
  }

  setLocalState(reducerInitialState);

  const value = useReducer(reducer, reducerInitialState);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

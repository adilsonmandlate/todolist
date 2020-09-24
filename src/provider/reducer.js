import { ADD_LABEL, ADD_TODO } from "./constants";
import { setLocalState } from "./localStorage";

export const initialState = {
  labels: [],
  todos: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newState = { ...state, todos: [action.todo, ...state.items] };
      setLocalState(newState);
      return newState;
    }

    case ADD_LABEL: {
      const newState = { ...state, labels: [action.label, ...state.labels] };
      setLocalState(newState);
      return newState;
    }

    default:
      return state;
  }
};

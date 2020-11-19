import { ADD_LABEL, ADD_TODO, COMPLETE_TODO, DELETE_TODO } from "./constants";
import { setLocalState } from "./localStorage";

export const initialState = {
  labels: [{ name: "Professional", numberTodos: 0 }],
  todos: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newState = { ...state, todos: [action.todo, ...state.todos] };
      setLocalState(newState);
      return newState;
    }

    case DELETE_TODO: {
      const newTodoList = state.todos.filter((todo) => todo.id !== action.id);
      const newState = { ...state, todos: newTodoList };
      setLocalState(newState);
      return newState;
    }

    case COMPLETE_TODO: {
      const todos = state.todos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: true };
        }

        return todo;
      });

      const newState = { ...state, todos };
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

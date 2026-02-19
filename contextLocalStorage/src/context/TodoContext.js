import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todo: [
    {
      id: 1,
      todo: "",
      completed: false,
    },
  ],
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  toggleComplete: () => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoContextProvider = TodoContext.Provider;


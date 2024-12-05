import { createContext, useContext, useState, ReactNode } from "react";
import { TodoType } from "../@types/todo";

export interface TodoContextType {
  todos: TodoType[];
  createTodo: (todo: string) => void;
  updateTodo: (id: number, content: string) => void;
  deleteTodo: (id: number) => void;
  changeStatusTodo: (id: number) => void;
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  createTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  changeStatusTodo: () => {},
});

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodo] = useState<TodoType[]>([]);

  const createTodo = (todo: string) => {
    const newTodo: TodoType = {
      id: Math.floor(Math.random() * 100) + 1,
      content: todo,
      status: false,
    };

    setTodo((prevTodos) => [...prevTodos, newTodo]);
  };

  function updateTodo(id: number, content: string) {    
    setTodo((prevTodos: any[]) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {          
          return {
            ...todo,
            content,
          };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id: number) {
    setTodo((prevTodo) => prevTodo.filter((todo) => !(todo.id === id)));
  }

  function changeStatusTodo(id: number) {
    setTodo((prevTodos: any[]) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: !todo.status,
          };
        }
        return todo;
      });
    });
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        createTodo,
        updateTodo,
        deleteTodo,
        changeStatusTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export const useTodo = () => {
  return useContext(TodoContext);
};

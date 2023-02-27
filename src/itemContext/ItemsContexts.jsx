import { createContext, useState } from "react";

const MOCK_UP_DATA = [
  { id: 1, item: "Task 1" },
  { id: 2, item: "Task 2" },
  { id: 3, item: "Task 3" },
  { id: 4, item: "Task 4" },
  { id: 5, item: "Task 5" },
  { id: 6, item: "Task 6" },
  { id: 7, item: "Task 7" },
];
export const ItemsContext = createContext({
  todo: null,
  setTodo: () => null,
  progress: null,
  setProgress: () => null,
  blocked: null,
  setBlocked: () => null,
  completed: null,
  setCompleted: () => null,
});

export const ItemsProvider = ({ children }) => {
  const [todo, setTodo] = useState(MOCK_UP_DATA);
  const [progress, setProgress] = useState(null);
  const [blocked, setBlocked] = useState(null);
  const [completed, setCompleted] = useState(null);
  const value = {
    todo,
    setTodo,
    progress,
    setProgress,
    blocked,
    setBlocked,
    completed,
    setCompleted,
  };
  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
};

import { useEffect, useState } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export const TodoFormList = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <div>
        <TodoForm todos={todos} setTodos={setTodos} />
      </div>
      <div className="w-full mt-6">
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
};

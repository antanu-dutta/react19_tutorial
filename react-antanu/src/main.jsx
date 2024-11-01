import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { TodoContainer } from "./components/Projects/Todo/TodoContainer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoContainer />
  </StrictMode>
);

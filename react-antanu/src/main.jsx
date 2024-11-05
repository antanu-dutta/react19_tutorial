import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { UseRef } from "./components/hooks/UseRef";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UseRef />
  </StrictMode>
);

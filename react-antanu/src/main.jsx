import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Theme from "./components/Projects/Theme/Theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme />
  </StrictMode>
);

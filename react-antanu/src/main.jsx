import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { UseStateChallenge } from "./components/Hooks Challenge/UseStateChallenge";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UseStateChallenge />
  </StrictMode>
);

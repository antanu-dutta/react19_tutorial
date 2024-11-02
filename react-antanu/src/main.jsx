import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Resgistration from "./components/hooks/Resgistration";
import LoginForm from "./components/hooks/LoginForm";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginForm />
  </StrictMode>
);

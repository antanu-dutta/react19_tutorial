import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Resgistration from "./components/hooks/Resgistration";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Resgistration />
  </StrictMode>
);

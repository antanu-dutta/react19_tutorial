import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import UseEffectChallenge from "./components/hooks/hook pratice/UseEffectChallenge";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ContactForm /> */}
    <UseEffectChallenge />
  </StrictMode>
);

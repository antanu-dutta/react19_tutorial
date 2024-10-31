import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { App } from "./App.jsx";
// import { EventHandling } from "./components/EventHandling.jsx";
// import { EventProps } from "./components/EventProps.jsx";
import { EventPropagation } from "./components/EventPropagation.jsx";
// import { Practices } from "./Practices.jsx";
// import Profile from "./components/Profile.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <EventHandling /> */}
    {/* <EventProps /> */}
    <EventPropagation />
    {/* <App /> */}
    {/* <Practices /> */}
    {/* <Profile /> */}
  </StrictMode>
);

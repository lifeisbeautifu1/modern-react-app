import { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import ReactGA from "react-ga4";
import "./index.css";

if (import.meta.env.MODE === "production") {
  ReactGA.initialize("G-7WT4CMCWSK");
}

createRoot(document.getElementById("root") as unknown as HTMLElement).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);

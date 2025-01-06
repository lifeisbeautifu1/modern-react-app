import { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./index.css";

createRoot(document.getElementById("root") as unknown as HTMLElement).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FinancialCalculator } from "./Interface/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FinancialCalculator />
  </React.StrictMode>
);

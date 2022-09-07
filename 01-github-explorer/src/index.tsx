import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

const elementById = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(elementById);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

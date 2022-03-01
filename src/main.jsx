import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components/App.jsx";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
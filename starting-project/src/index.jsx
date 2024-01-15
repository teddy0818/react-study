import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
// jsx
ReactDOM.createRoot(entryPoint).render(<App />);
// js
// ReactDOM.createRoot(entryPoint).render(React.createElement(App));

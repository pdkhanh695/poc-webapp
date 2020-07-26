  
import React from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";

render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);
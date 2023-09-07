import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {Provider as UserProvider} from "../src/context/usersContext"
import {Provider as ProductProvider} from "../src/context/productsContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

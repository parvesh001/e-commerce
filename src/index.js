import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import store from "./Store";
import { Provider } from "react-redux";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import { AuthContextProvider } from "./Context/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);

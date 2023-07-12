import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Global/Store.js";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
ReactDOM.render(
  <React.StrictMode>
    {/* Wraping App component by Provider so all app component get datalayer access */}
    {/* reducer is how we dispatch data to data layer */}
    <CookiesProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CookiesProvider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

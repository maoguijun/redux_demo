import "bable-polyfill";
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {creatStore} from "redux";
import todoApp from "./reducers";
import App from "./components/App";

let store = creatStore(todoApp);
render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

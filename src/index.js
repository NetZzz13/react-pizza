import React, { useDispatch } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./scss/app.scss";
import App from "./App";
import { Provider } from "react-redux";

import store from "./redux/store";

/* console.log(store) */



ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

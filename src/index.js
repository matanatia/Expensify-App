import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
//third party
import { Provider } from "react-redux";
//developed
import App from "./App";
import configureStore from "./redux/store/configureStore";
//##################################################################
import { addExpense } from "./redux/actions/expenses";
//style
import "./index.css";

const store = configureStore();

//##################################################################
store.dispatch(addExpense({ description: "udemy bill", amount: 50 }));
store.dispatch(
  addExpense({
    description: "ebay bill",
    createdAt: 1572948000000,
    amount: 100
  })
);
store.dispatch(addExpense({ description: "rent bill", amount: 1150 }));
//##################################################################

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

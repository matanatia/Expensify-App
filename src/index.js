import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//developed components
import "./index.css";
import App from "./App";
import Edit from "./components/Edit/Edit";
import Help from "./components/Help/Help";

//aplication routes
const routes = (
  <BrowserRouter>
    <Route path="/" component={App} exact={true}/>
    <Route path="/edit" component={Edit} exact={true}/>
    <Route path="/help" component={Help} exact={true}/>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

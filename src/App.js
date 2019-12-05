import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//developed components
import "./App.css";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;

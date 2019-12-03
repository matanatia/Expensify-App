import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
//developed components
import './App.css';
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";
import Help from "./components/Help/Help";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";


//aplication routes
const routes = (
  <BrowserRouter>
    <Header title="Expensify"/>
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/create" component={Create} />
      <Route path="/edit" component={Edit} />
      <Route path="/help" component={Help} />
      {/* if page dosn't found */}
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

function App() {
  return (
    <div className="App">
      { routes }
    </div>
  );
}

export default App;

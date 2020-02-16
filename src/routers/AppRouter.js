import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//developed components
import HomePage from "../components/HomePage/HomePage";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Create from "../components/Create/Create";
import Edit from "../components/Edit/Edit";
import Help from "../components/Help/Help";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";

//aplication routes
const AppRouter = () => (
  <BrowserRouter>
    <Header title="Expensify" />
    <div style={{ flex: 1, marginTop: "15rem" }}>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/create" component={Create} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/help" component={Help} />
        {/* if page dosn't found */}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;

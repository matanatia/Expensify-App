import React, { useState, useEffect } from "react";
//developed
import ExpenseList from "../ExpenseList/ExpenseList";
import SearchExpenseList from "../SearchExpenseList/SearchExpenseList";
//style
import "./HomePage.css";

const HomePage = props => {
  return (
    <div>
      <SearchExpenseList />
      <ExpenseList />
    </div>
  );
};

export default HomePage;

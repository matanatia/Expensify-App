import React from "react";
//developed
import ExpenseForm from "../ExpenseForm/ExpenseForm";
//style
import "./Create.css";

const Create = props => {
  return (
    <div className="Create">
      <h1>Add Expense</h1>
      <ExpenseForm />
    </div>
  );
};

export default Create;

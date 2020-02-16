import React from "react";
//third party
import { connect } from "react-redux";
//developed
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { addExpense } from "../../redux/actions/expenses";
//style
import "./Create.css";

const Create = props => {
  const onSubmit = expense => {
    props.dispatch(addExpense(expense));
  };

  return (
    <div className="Create">
      <h1>Add Expense</h1>
      <ExpenseForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect()(Create);

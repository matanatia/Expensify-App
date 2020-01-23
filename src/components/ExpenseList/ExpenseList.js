import React from "react";
//third party
import { connect } from "react-redux";
//developed
import ExpenseListItme from "../ExpenseListItme/ExpenseListItme";
import { getVisibleExpenses } from "../../redux/selectors/expenses";
//style
import "./ExpenseList.css";

const ExpenseList = props => {
  return (
    <div className="ExpenseList">
      <h1>Expense List:</h1>
      {props.expenses.map(expense => (
        <ExpenseListItme key={expense.id} {...expense} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);

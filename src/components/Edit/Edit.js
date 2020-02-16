import React from "react";
//third party
import { connect } from "react-redux";
//developed
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { editExpense } from "../../redux/actions/expenses";
//style
import "./Edit.css";

const Edit = props => {
  const onSubmit = expense => {
    props.dispatch(editExpense(props.match.params.id, expense));
  };

  const { data } = props.location.state;

  return (
    <div className="Edit">
      <h1>Edit Expense</h1>
      <ExpenseForm
        onSubmit={onSubmit}
        btnTitle="Save Changes"
        expenseData={data}
      />
    </div>
  );
};

export default connect()(Edit);

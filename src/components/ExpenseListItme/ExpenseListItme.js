import React from "react";
//third party
import { connect } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { removeExpense } from "../../redux/actions/expenses";
//style
import "./ExpenseListItme.css";

const ExpenseListItme = ({ id, description, amount, createdAt, dispatch }) => {
  return (
    <div className="ExpenseListItme">
      <h3>{description}</h3>
      <p>
        {amount} -{createdAt}
      </p>
      <div
        className={"trashContainer"}
        onClick={() => {
          dispatch(removeExpense({ id }));
        }}
      >
        <FaTrash size={"2rem"} />
      </div>
    </div>
  );
};

export default connect()(ExpenseListItme);

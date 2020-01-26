import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = props => {
  const title = "ExpenseForm component work";

  return (
    <div className="ExpenseForm">
      <form>
        <input type="text" placeholder="Description" autoFocus />
        <input type="number" placeholder="Amount" />
        <textarea placeholder="Add a note for your expense (optional)" />
      </form>
    </div>
  );
};

export default ExpenseForm;

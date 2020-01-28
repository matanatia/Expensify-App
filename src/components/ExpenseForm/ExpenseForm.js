import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = props => {
  // Declare a new state variables
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const onDescriptionChange = e => {
    setDescription(e.target.value);
  };

  const onNoteChange = e => {
    setNote(e.target.value);
  };

  const onAmountChange = e => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      setAmount(amount);
    }
  };

  return (
    <div className="ExpenseForm">
      <form>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={onDescriptionChange}
          autoFocus
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={onAmountChange}
        />
        <textarea
          placeholder="Add a note for your expense (optional)"
          value={note}
          onChange={onNoteChange}
        />
        <button>Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;

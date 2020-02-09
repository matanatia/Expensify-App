import React, { useState } from "react";
//third party
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
//style
import "react-dates/lib/css/_datepicker.css";
import "./ExpenseForm.css";

const ExpenseForm = props => {
  // Declare a new state variables
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [createdAt, setCreatedAt] = useState(moment());
  const [calanderFocused, setCalanderFocused] = useState(false);

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

  const onDateChange = createdAt => {
    setCreatedAt(createdAt);
  };

  const onFocusChange = ({ focused }) => {
    setCalanderFocused(focused);
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
        <SingleDatePicker
          date={createdAt}
          onDateChange={onDateChange}
          focused={calanderFocused}
          onFocusChange={onFocusChange}
          numberOfMonths={1}
          isOutsideRange={day => false}
          id={createdAt.format()}
        />
        <button>Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;

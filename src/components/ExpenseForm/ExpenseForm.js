import React, { useState } from "react";
//third party
import { withRouter } from "react-router-dom";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import { ANCHOR_RIGHT } from "react-dates/constants";
import "react-dates/initialize";
//developed
import Modal from "../Modal/Modal";
//style
import "react-dates/lib/css/_datepicker.css";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSubmit, history, btnTitle, expenseData }) => {
  // Declare a new state variables
  const [description, setDescription] = useState(
    expenseData && expenseData.description ? expenseData.description : ""
  );
  const [amount, setAmount] = useState(
    expenseData && expenseData.amount ? expenseData.amount : ""
  );
  const [note, setNote] = useState(
    expenseData && expenseData.note ? expenseData.note : ""
  );
  const [createdAt, setCreatedAt] = useState(
    expenseData && expenseData.createdAt && moment(expenseData.createdAt)
      ? moment(expenseData.createdAt)
      : moment()
  );

  const [calanderFocused, setCalanderFocused] = useState(false);
  const modalMsg = "Please provide description and amount";
  const [showModal, setShowModal] = useState(false);

  const onDescriptionChange = e => {
    setDescription(e.target.value);
  };

  const onNoteChange = e => {
    setNote(e.target.value);
  };

  const onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount(amount);
    }
  };

  const onDateChange = createdAt => {
    createdAt && setCreatedAt(createdAt);
  };

  const onFocusChange = ({ focused }) => {
    setCalanderFocused(focused);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    if (!description || !amount) {
      setShowModal(true);
    } else {
      onSubmit({
        description,
        amount: parseFloat(amount),
        createdAt: createdAt.valueOf(),
        note
      });
      history.push("/");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Modal
        description={modalMsg}
        showModal={showModal}
        closeModal={closeModal}
        modalBackgroundStyle={{ height: "120%" }}
      />
      <div className="ExpenseForm">
        <form onSubmit={onSubmitForm}>
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

          <SingleDatePicker
            date={createdAt}
            onDateChange={onDateChange}
            focused={calanderFocused}
            onFocusChange={onFocusChange}
            numberOfMonths={1}
            isOutsideRange={day => false}
            id={createdAt.format()}
            anchorDirection={ANCHOR_RIGHT}
            //openDirection={OPEN_UP}
          />

          <textarea
            placeholder="Add a note for your expense (optional)"
            value={note}
            onChange={onNoteChange}
          />

          <button style={{ marginTop: "1rem" }}>
            {btnTitle || "Add Expense"}
          </button>
        </form>
      </div>
    </>
  );
};

export default withRouter(ExpenseForm);

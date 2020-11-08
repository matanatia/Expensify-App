import React from "react";
//third party
import moment from "moment";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { FaTrash, FaRegEdit } from "react-icons/fa";
import { removeExpense } from "../../redux/actions/expenses";
//style
import "./ExpenseListItme.css";

const ExpenseListItme = ({
  id,
  description,
  amount,
  createdAt,
  dispatch,
  history
}) => {
  const onRemoveExpense = () => dispatch(removeExpense({ id }));
  const onEditExpense = () => history && history.push(`/edit/${id}`);

  return (
    <div className="ExpenseListItme">
      <h3 style={{ marginLeft: '2rem' }}>{description}</h3>
      <p>{amount}</p>
      <p>{moment(createdAt).calendar()}</p>
      <div className={"iconContainer"} onClick={onRemoveExpense}>
        <FaTrash size={"2rem"} />
      </div>
      <div className={"iconContainer"} onClick={onEditExpense} style={{ marginRight: '2rem' }}>
        <FaRegEdit size={"2rem"} />
      </div>
    </div>
  );
};

export default connect()(withRouter(ExpenseListItme));

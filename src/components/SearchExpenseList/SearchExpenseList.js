import React from "react";
//third party
import { connect } from "react-redux";
import { FaSearch } from "react-icons/fa";
//developed
import {
  setTextFilter,
  sortByAmount,
  sortByDate
} from "../../redux/actions/filters";
//style
import "./SearchExpenseList.css";

const SearchExpenseList = props => {
  const searchValueChange = e => {
    props.dispatch(setTextFilter(e.target.value));
  };

  const selectValueChange = e => {
    switch (e.target.value) {
      case "date":
        props.dispatch(sortByDate());
        break;
      case "amount":
        props.dispatch(sortByAmount());
        break;
      default:
        break;
    }
  };

  return (
    <div className="SearchExpenseList">
      <select onChange={selectValueChange}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
      <input
        type="text"
        value={props.filters.text}
        onChange={searchValueChange}
      />
      <FaSearch size={"3rem"} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(SearchExpenseList);

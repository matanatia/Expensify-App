import React, { useState, useEffect } from "react";
//third party
import { connect } from "react-redux";
import { FaSearch } from "react-icons/fa";
//developed
import { setTextFilter } from "../../redux/actions/filters";
//style
import "./SearchExpenseList.css";

const SearchExpenseList = props => {
  const searchValueChange = e => {
    props.dispatch(setTextFilter(e.target.value));
  };

  return (
    <div className="SearchExpenseList">
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

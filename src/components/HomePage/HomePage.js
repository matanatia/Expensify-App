import React, { useState } from "react";
//third party
import { DateRangePicker } from "react-dates";
import { connect } from "react-redux";
import { MdClear } from "react-icons/md";
//developed
import ExpenseList from "../ExpenseList/ExpenseList";
import SearchExpenseList from "../SearchExpenseList/SearchExpenseList";
import { setStartDate, setEndDate } from "../../redux/actions/filters";
//style
import "./HomePage.css";

const HomePage = props => {
  const [calendarFocused, setCalendarFocused] = useState(null);

  const onDatesChange = ({ startDate, endDate }) => {
    props.dispatch(setStartDate(startDate));
    props.dispatch(setEndDate(endDate));
  };

  const onFocusChange = calendarFocused => {
    setCalendarFocused(calendarFocused);
  };

  const onClearDates = () => {
    props.dispatch(setStartDate(null));
    props.dispatch(setEndDate(null));
  };

  return (
    <div>
      <SearchExpenseList />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "1rem"
        }}
      >
        <DateRangePicker
          startDate={props.filters.startDate}
          endDate={props.filters.endDate}
          onDatesChange={onDatesChange}
          focusedInput={calendarFocused}
          onFocusChange={onFocusChange}
          startDateId={`startDateId${Date.now()}`}
          endDateId={`endDateId${Date.now()}`}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <div className={"iconContainer_clear"} onClick={onClearDates}>
          <MdClear size={"2rem"} />
        </div>
      </div>
      <ExpenseList />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(HomePage);

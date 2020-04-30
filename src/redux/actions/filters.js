// filter actions
//SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

//SET_START_DATE
export const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});

//SET_END_DATE
export const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});

//SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

//SORT_BY_DATE
export const sortByDate = () => ({
  type: "SORT_BY_DATE"
});


//third party
import { createStore, combineReducers } from "redux";
//developed
import expensesReducer from "../reducers/expenses";
import { getVisibleExpenses } from "../selectors/expenses";
import filtersReducer from "../reducers/filters";

export default () => {
  //create the store for the app
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );
  return store;
};

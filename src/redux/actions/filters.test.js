import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from "./filters";

test('should setup setTextFilter filter object', () => {
  const text = 'test';
  const action = setTextFilter(text);

  expect(action).toEqual({ type: "SET_TEXT_FILTER", text });
});

test('should setup setTextFilter filter object default values', () => {
  const defaultText = '';
  const action = setTextFilter();

  expect(action).toEqual({ type: "SET_TEXT_FILTER", text: defaultText });
});


test('should setup setStartDate filter object', () => {
  const startDate = Date.now();
  const action = setStartDate(startDate);

  expect(action).toEqual({ type: "SET_START_DATE", startDate });
});

test('should setup setEndDate filter object', () => {
  const endDate = Date.now();
  const action = setEndDate(endDate);

  expect(action).toEqual({ type: "SET_END_DATE", endDate });
});

test('should setup sortByAmount filter object', () => {
  const action = sortByAmount();

  expect(action).toEqual({ type: "SORT_BY_AMOUNT" });
});

test('should setup sortByDate filter object', () => {
  const action = sortByDate();

  expect(action).toEqual({ type: "SORT_BY_DATE" });
});
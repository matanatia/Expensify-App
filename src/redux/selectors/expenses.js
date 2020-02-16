//third party
import moment from "moment";

export const getVisibleExpenses = (
  expenses,
  { text, sortBy, startDate, endDate }
) => {
  return expenses
    .filter(expense => {
      //note, amount
      const { description, createdAt } = expense;
      const createdAtMoment = moment(createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;
      const textMatch =
        typeof text === "string" &&
        typeof description === "string" &&
        description
          .toLowerCase()
          .trim()
          .includes(text.toLowerCase().trim());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }

      //defult
      return 1;
    });
};

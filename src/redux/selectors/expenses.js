export const getVisibleExpenses = (
  expenses,
  { text, sortBy, startDate, endDate }
) => {
  return expenses
    .filter(expense => {
      //note, amount
      const { description, createdAt } = expense;
      const startDateMatch =
        typeof startDate !== "number" ||
        typeof createdAt !== "number" ||
        createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" ||
        typeof createdAt !== "number" ||
        createdAt <= endDate;
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


import { getVisibleExpenses } from "./expenses";
import moment from 'moment'

const testExpenses = [
    {
        id: 1,
        description: "test 1",
        note: '',
        amount: 100,
        createdAt: 0
    },
    {
        id: 2,
        description: "test 2",
        note: '',
        amount: 200,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: 3,
        description: "test 3",
        note: '',
        amount: 300,
        createdAt: moment(0).add(4, 'days').valueOf()
    },
];

test('should filter by text value "1" ', () => {
    const filters = { text: '1' }
    const result = getVisibleExpenses(testExpenses, filters);

    //expect(result).toEqual(testExpenses.filter((expense) => expense.description.includes(filters.text)));
    expect(result).toEqual([testExpenses[0]]);
});

test('should filter by text value "test" and sort by date', () => {
    const filters = { text: 'test', sortBy: 'date' }
    const result = getVisibleExpenses(testExpenses, filters);

    expect(result).toEqual([testExpenses[2], testExpenses[0], testExpenses[1]]);
});

test('should filter by text value "test" and sort by amount', () => {
    const filters = { text: 'test', sortBy: 'amount' }
    const result = getVisibleExpenses(testExpenses, filters);

    expect(result).toEqual([testExpenses[2], testExpenses[1], testExpenses[0]]);
});

test('should filter by startDate', () => {
    const filters = { text: 'test', sortBy: 'date', startDate: moment(0) }
    const result = getVisibleExpenses(testExpenses, filters);

    expect(result).toEqual([testExpenses[2], testExpenses[0]]);
});

test('should filter by endDate', () => {
    const filters = { text: 'test', sortBy: 'date', endDate: moment(0) }
    const result = getVisibleExpenses(testExpenses, filters);

    expect(result).toEqual([testExpenses[0], testExpenses[1]]);
});
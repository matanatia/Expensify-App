import { addExpense, removeExpense, editExpense } from './expenses';

test('should setup add expense action object', () => {
    const expenseData = {
        description: "test",
        note: "test",
        amount: 0,
        createdAt: Date.now()
    };
    const action = addExpense(expenseData);

    expect(action).toEqual({ type: "ADD_EXPENSE", expense: { id: expect.any(String), ...expenseData } });
});

test('should setup add expense action object with default values', () => {
    const defaultValues = {
        description: "",
        note: "",
        amount: 0,
        createdAt: Date.now()
    };
    const action = addExpense();

    expect(action).toEqual({ type: "ADD_EXPENSE", expense: { id: expect.any(String), ...defaultValues } });
});

test('should setup remove expense action object', () => {
    const id = '123';
    const action = removeExpense({ id });

    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id
    });
});


test('should setup edit expense action object', () => {
    const id = '123';
    const updates = {
        description: 'test',
        note: 'test',
        amount: 5
    }
    const action = editExpense(id, updates);

    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id,
        updates
    });
});
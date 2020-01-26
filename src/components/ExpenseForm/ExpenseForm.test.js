import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseForm from './ExpenseForm';

it('renders without crashing', () => {
const div = document.createElement('div');
ReactDOM.render(<ExpenseForm />, div);
ReactDOM.unmountComponentAtNode(div);
});
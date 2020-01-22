import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseList from './ExpenseList';

it('renders without crashing', () => {
const div = document.createElement('div');
ReactDOM.render(<ExpenseList />, div);
ReactDOM.unmountComponentAtNode(div);
});
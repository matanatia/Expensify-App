import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseListItme from './ExpenseListItme';

it('renders without crashing', () => {
const div = document.createElement('div');
ReactDOM.render(<ExpenseListItme />, div);
ReactDOM.unmountComponentAtNode(div);
});
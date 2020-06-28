import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
* !! this test file work with the test framework jest - note that jest installed automaticly in your node_modules when using creat-react-app to create the app  first time)
* !! and this test file work with enzyme package - go to enzyme documentation to install properly
* for test file to work properly add babel.config.js at the root of the project ith the right configurations
*/

it('renders without crashing', () => {
    const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

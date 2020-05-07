import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

/**
 * for test file to work properly add 
 
babel.config.js at the root of the project with:

 module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
    ],
};
 

* !! this test file work with the test framework jest - note that jest installed automaticly in your node_modules when using creat-react-app to create the app  first time)
*/

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';

require('dotenv').config()

const render = (Component: any) => {
    ReactDOM.render(
        <Component />,
        document.getElementById('app')
    );
};

render(App);

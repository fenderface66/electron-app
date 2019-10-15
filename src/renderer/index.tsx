import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';

const render = (Component: any) => {
    ReactDOM.render(
        <Component />,
        document.getElementById('app')
    );
};

render(App);

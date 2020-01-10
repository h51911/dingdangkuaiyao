import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { HashRouter, BrowserRouter } from 'react-router-dom';


import store from './store';
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));

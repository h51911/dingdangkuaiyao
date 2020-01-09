import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { HashRouter, BrowserRouter } from 'react-router-dom'
=======
import { HashRouter } from 'react-router-dom';
>>>>>>> 49d9c7c173d0a4379f6ddde344930d793d828711
=======
import { HashRouter, BrowserRouter } from 'react-router-dom'
>>>>>>> laoma
=======
import { HashRouter,BrowserRouter } from 'react-router-dom';
>>>>>>> e1cc725f3f1bb88131a86dd36e2c93e140f311ce

const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;
ReactDOM.render(

    <Router>
        <App />
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

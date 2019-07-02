import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './MainContainers/App';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// Redux
// import { createStore } from 'redux';


// const store = createStore();

// console.log(store);


ReactDOM.render( <App />, document.getElementById('root') );




serviceWorker.unregister();

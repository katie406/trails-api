import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger'; 

const store = createStore(reducers, applyMiddleware(logger));


ReactDOM.render(<Provider store ={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

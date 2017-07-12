/* global document, window */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import WebFont from 'webfontloader';
import reducer from './reducers';
import App from './components/App.jsx';
/* eslint-ensable no-unused-vars */

// styling
require('./../scss/styles.scss');

WebFont.load({
  google: {
    families: ['Lato'],
  },
});

// polyfill for older browswers
require('es6-promise').polyfill();

// redux stuff

const uriMiddleware = ({ getState }) => next => (action) => {
  // TODO parse filters to URI
  next(action);
};

/* eslint-disable no-underscore-dangle */
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable */
const enhancer = reduxDevTools ? compose(applyMiddleware(uriMiddleware), reduxDevTools) : applyMiddleware(uriMiddleware);
const store = createStore(
  reducer,
  {
    filters: {},
  },
  enhancer,
);


// app init
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

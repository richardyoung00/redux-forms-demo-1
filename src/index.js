import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'
import { socketMiddleware } from './middleware/socket';

import App from './App';
import './index.css';

import io from 'socket.io-client';

const socket = io();

const reducers = {
  form: formReducer
};

let store = createStore(
  combineReducers(reducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(socketMiddleware(socket))
);

socket.on('formActions', (data) => {
  store.dispatch({...data, from: 'server'})
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

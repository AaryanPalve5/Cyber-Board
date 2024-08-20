// src/store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Correct named import
import rootReducer from './reducers'; // Adjust the path if necessary

const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // Use `thunk` as a middleware
);

export default store;

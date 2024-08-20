// src/reducers/index.js

import { combineReducers } from 'redux';
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  SET_FILTER,
} from '../actions';

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
};

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return true;
    case FETCH_DATA_SUCCESS:
    case FETCH_DATA_FAILURE:
      return false;
    default:
      return state;
  }
};

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_DATA_FAILURE:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: dataReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export default rootReducer;

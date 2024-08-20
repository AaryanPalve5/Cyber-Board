// src/actions.js

// Action Types
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Action Creators
export const fetchDataRequest = () => {
  return async dispatch => {
    dispatch({ type: FETCH_DATA_REQUEST });
      try {  
        const response = await fetch('https://api.allorigins.win/raw?url=http://52.168.1.54:8080/api/v1/userActivities');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_DATA_FAILURE, error: error.message });
    }
  };
};

// Other action creators
export const setFilter = filter => ({
  type: 'SET_FILTER',
  payload: filter
});

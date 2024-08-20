// src/thunks/fetchData.js

import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../actions';

export const fetchDataThunk = () => async (dispatch) => {
  dispatch(fetchDataRequest());
  try {
    const response = await fetch('http://52.168.1.54:8080/api/v1/userActivities');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    dispatch(fetchDataSuccess(data));
  } catch (error) {
    dispatch(fetchDataFailure(error.toString()));
  }
};

// src/thunks/fetchData.js
export const fetchDataRequest = () => async dispatch => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });
    try {
      const response = await fetch('http://52.168.1.54:8080/api/v1/userActivities');
      const data = await response.json();
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', error });
    }
  };
  
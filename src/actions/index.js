// src/actions/index.js
export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    payload: filter,
  });
  
  export const fetchDataRequest = () => ({
    type: 'FETCH_DATA_REQUEST',
  });
  
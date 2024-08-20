// src/reducers/dataReducer.js
const initialState = {
    data: [],
    filter: {
      user: '',
      category: ''
    },
    loading: false,
    error: null
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_DATA_SUCCESS':
        return { ...state, loading: false, data: action.payload };
      case 'FETCH_DATA_FAILURE':
        return { ...state, loading: false, error: action.error };
      case 'SET_FILTER':
        return { ...state, filter: action.payload };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  
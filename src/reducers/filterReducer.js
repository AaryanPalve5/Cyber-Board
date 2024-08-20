// src/reducers/filterReducer.js
const initialState = {
    user: null,
    category: null,
  };
  
  const filterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_FILTER':
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  };
  
  export default filterReducer;
  
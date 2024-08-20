import React from 'react';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();

  const handleUserChange = value => {
    dispatch({ type: 'SET_FILTER', payload: { user: value, category: '' } });
  };

  const handleCategoryChange = value => {
    dispatch({ type: 'SET_FILTER', payload: { user: '', category: value } });
  };

  return (
    <div>
      <Select placeholder="Select User" onChange={handleUserChange} />
      <Select placeholder="Select Category" onChange={handleCategoryChange} />
    </div>
  );
};

export default Filter;

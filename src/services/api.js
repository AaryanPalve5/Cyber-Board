// src/services/api.js
import axios from 'axios';

const API_URL = 'http://52.168.1.54:8080/api/v1/userActivities';

export const fetchUserActivities = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

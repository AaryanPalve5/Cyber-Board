// src/sagas.js
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchData() {
  try {
    const response = yield call(axios.get, 'http://52.168.1.54:8080/api/v1/userActivities');
    yield put({ type: 'SET_DATA', payload: response.data });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function* rootSaga() {
  yield takeEvery('FETCH_DATA_REQUEST', fetchData);
}

export default rootSaga;

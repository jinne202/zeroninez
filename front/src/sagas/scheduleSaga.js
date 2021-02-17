import axios from 'axios';
import { all, fork, put, takeLatest, throttle, call } from 'redux-saga/effects';
import { LOAD_SCHEDULES_REQUEST, LOAD_SCHEDULES_SUCCESS, LOAD_SCHEDULES_FAILURE} from '../reducers/scheduleReducer';

function loadSchduleAPI() {
  return axios.get(`/schedule/`);
}

function* loadSchedule(){
  try {
      const result = yield call(loadSchduleAPI);
      yield put({
          type : LOAD_SCHEDULES_SUCCESS,
          data : result.data,
      });
  } catch (e) {
      console.error(e);
      yield put({
          type : LOAD_SCHEDULES_FAILURE,
          error : e,
      });
  }
}

function* watchLoadSchedule(){
  yield takeLatest(LOAD_SCHEDULES_REQUEST, loadSchedule);
}

export default function* projectSaga() {
    yield all([
      fork(watchLoadSchedule),
    ]);
}


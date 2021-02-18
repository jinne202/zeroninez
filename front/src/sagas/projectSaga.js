import axios from 'axios';
import { all, fork, put, takeLatest, throttle, call, takeEvery } from 'redux-saga/effects';
import { PROJECT_SUBMIT_REQUEST, PROJECT_SUBMIT_SUCCESS, PROJECT_SUBMIT_FAILURE} from '../reducers/projectSubmitReducer';

function projectSubmitAPI(data){
    return axios.post('/projectSubmit', data);
}

function* projectSubmit(action){
    try {
        const result = yield call(projectSubmitAPI, action.data);
        yield put({
            type : PROJECT_SUBMIT_SUCCESS
        })
    } catch (e) {
        yield put({
            type : PROJECT_SUBMIT_FAILURE,
            error: err.response.data,
        })
    }
}

function* watchProjectSubmit(){
    yield takeLatest(PROJECT_SUBMIT_REQUEST, projectSubmit);
}

export default function* userSaga() {
    yield all([
        fork(watchProjectSubmit),
    ]);
}
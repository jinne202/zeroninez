import axios from 'axios';
import { all, fork, put, takeLatest, throttle, call, takeEvery } from 'redux-saga/effects';
import { PROJECT_SUBMIT_REQUEST, PROJECT_SUBMIT_SUCCESS, PROJECT_SUBMIT_FAILURE} from '../reducers/projectSubmitReducer';

function projectSubmitAPI(data, file){
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data",  new Blob([JSON.stringify(data)], { type: "application/json" }));
    console.log(formData);  
    return axios.post('/upload', formData, {
        headers: {
          "Content-Type": `multipart/form-data`,
        },
      })
      .then((res) => console.log(res));
}

function* projectSubmit(action){
    try {
        const result = yield call(projectSubmitAPI, action.data, action.file);
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
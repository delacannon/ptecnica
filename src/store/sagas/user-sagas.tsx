import { takeEvery, fork, call, put, takeLatest } from "redux-saga/effects";
import * as api from "api";
import {
  fetchUsersSuccess,
  fetchUserSuccess,
  fetchUserError,
  logout,
} from "store/actions";
import { FETCH_USER, FETCH_USERS, LOGOUT } from "store/constants/constants";

function* getUserToken(data) {
  try {
    const response = yield call(api.getUser, data.payload);
    if (response.status === 200) {
      yield put(fetchUserSuccess(response.token));
    }
  } catch (err) {
    yield put(fetchUserError(err));
  }
}

function* getUserTokenRequest() {
  yield takeLatest(FETCH_USER, getUserToken);
}

function* getUsers(page) {
  // TODO: refact "page query" a { payload }
  try {
    const response = yield call(api.getUsers, page.payload);
    yield put(fetchUsersSuccess(response));
  } catch (err) {
    // TODO: capturar con fetchUserError control de errores
    console.log(err);
  }
}

function* getUsersRequest() {
  yield takeLatest(FETCH_USERS, getUsers);
}

function* getLogout() {
  try {
    yield call(logout);
    yield call([localStorage, localStorage.clear]);
  } catch (err) {
    console.log(err);
  }
}

function* getLogoutRequest() {
  yield takeLatest(LOGOUT, getLogout);
}

export const userSagas = [
  fork(getUserTokenRequest),
  fork(getUsersRequest),
  fork(getLogoutRequest),
];

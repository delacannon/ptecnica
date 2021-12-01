import { fork, call, put, takeLatest } from "redux-saga/effects";
import * as api from "api";
import {
  fetchUserError,
  fetchUsersSuccess,
  fetchUserSuccess,
  logout,
} from "store/actions";
import { FETCH_USER, FETCH_USERS, LOGOUT } from "store/constants/constants";

function* getUserToken(data) {
  try {
    const response = yield call(api.getUser, data.payload);

    if (response.token) {
      yield put(fetchUserSuccess(response.token));
    }
    yield put(fetchUserError(response.error));
  } catch (err) {
    console.log(err);
  }
}

function* getUserTokenRequest() {
  yield takeLatest(FETCH_USER, getUserToken);
}

function* getUsers(page) {
  try {
    const response = yield call(api.getUsers, page.payload);
    yield put(fetchUsersSuccess(response));
  } catch (err) {
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

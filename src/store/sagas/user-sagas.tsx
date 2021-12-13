import { fork, call, put, takeLatest, takeLeading } from "redux-saga/effects";
import { loginUser, getUsers } from "api";
import {
  fetchListSuccessAction,
  loginErrorAction,
  loginSuccessAction,
  logoutAction,
  loadingStartAction,
  loadingDoneAction,
} from "../action-creators";
import { ActionType } from "../constants";
import { httpErrors } from "utils";

function* getUserToken(data) {
  try {
    yield put(loadingStartAction(true));

    // POST credenciales
    const { token } = yield call(loginUser, data.payload);
    yield put(loginSuccessAction(token));
  } catch (err: unknown) {
    if (err instanceof Error) {
      // Detectar posibles errores de petición
      const error = httpErrors(err.message);
      yield put(loginErrorAction(error));
    }
  } finally {
    yield put(loadingDoneAction(false));
  }
}

function* getUserTokenRequest() {
  yield takeLeading(ActionType.LOGIN, getUserToken);
}

function* getList(page) {
  try {
    yield put(loadingStartAction(true));
    const response = yield call(getUsers, page);
    yield put(fetchListSuccessAction(response));
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
  } finally {
    yield put(loadingDoneAction(false));
  }
}

function* getUsersRequest() {
  yield takeLatest(ActionType.FETCH_USERS_LIST, getList);
}

function* getLogout() {
  try {
    yield call(logoutAction);
    yield call([localStorage, localStorage.clear]);
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
  }
}

function* getLogoutRequest() {
  yield takeLatest(ActionType.LOGOUT, getLogout);
}

export const userSagas = [
  fork(getUserTokenRequest),
  fork(getUsersRequest),
  fork(getLogoutRequest),
];

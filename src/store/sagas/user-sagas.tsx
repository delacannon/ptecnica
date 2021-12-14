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
import { FetchListAction, LoginAction } from "store/actions";
import { httpErrors } from "utils";

function* getUserToken({ payload }: LoginAction) {
  try {
    yield put(loadingStartAction(true));
    // POST credenciales
    const { token } = yield call(loginUser, payload);
    /* IMPORTANTE: El API REST https://reqres.in/ utilizado en esta prueba no autentica a los usuarios
     * según el password introducido. Le vale cualquier password en la petición para autenticar
     * a un usuario con su email y devolver su token de acceso. En la prueba se detalla que debe ser el usuario
     * `eve.holt@reqres.in`, y la contraseña `cityslicka`, esta comprobación debería producirse a nivel
     * de servidor comparando el password de la petición con la contraseña encriptada en de la DB. Bajo
     * ningún concepto el código enmarcado puede utilizarse en producción. Se trata tan solo de una
     * simulación que retorna pronto un evento de error de no existir coincidencia en las credenciales.
     */
    const bearer = `ZXZlLmhvbHRAcmVxcmVzLmluOmNpdHlzbGlja2E=`;
    const { password, username } = payload;
    if (btoa(`${username}:${password}`) !== bearer) {
      return yield put(
        loginErrorAction(
          `El usuario no es válido. Usar las siguientes credenciales: username='eve.holt@reqres.in' password='cityslicka'`
        )
      );
    }
    // Si contraseña y email coninciden almacena el token del usuario
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

function* getList({ payload }: FetchListAction) {
  try {
    yield put(loadingStartAction(true));
    const response = yield call(getUsers, payload);
    yield put(fetchListSuccessAction(response));
  } catch (err) {
    if (err instanceof Error) {
      // Detectar posibles errores de petición
      const error = httpErrors(err.message);
      yield put(loginErrorAction(error));
    }
  } finally {
    yield put(loadingDoneAction(false));
  }
}

function* getUsersRequest() {
  yield takeLeading(ActionType.FETCH_USERS_LIST, getList);
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

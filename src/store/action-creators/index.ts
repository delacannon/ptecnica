import { ActionType } from "../constants";
import {
  LoginAction,
  LoginSuccessAction,
  LoginErrorAction,
  FetchListAction,
  FetchListSuccessAction,
  LogoutAction,
  LoadingStartAction,
  LoadingDoneAction,
  ChangePageAction,
} from "../actions";
import type { User } from "api";
import type { IUsers } from "../actions";

export const loginAction = (credentials: User): LoginAction => {
  return {
    type: ActionType.LOGIN,
    payload: credentials,
  };
};

export const loginSuccessAction = (token: string): LoginSuccessAction => {
  return {
    type: ActionType.LOGIN_SUCCESS,
    payload: token,
  };
};

export const loginErrorAction = (error: string): LoginErrorAction => {
  return {
    type: ActionType.LOGIN_ERROR,
    payload: error,
  };
};

export const fetchListAction = (page: number): FetchListAction => {
  return {
    type: ActionType.FETCH_USERS_LIST,
    payload: page,
  };
};

export const fetchListSuccessAction = (
  users: IUsers
): FetchListSuccessAction => {
  return {
    type: ActionType.USERS_LIST,
    payload: users,
  };
};

export const logoutAction = (): LogoutAction => {
  return {
    type: ActionType.LOGOUT,
  };
};

// UI Actions
export const changePageAction = (page: number): ChangePageAction => {
  return {
    type: ActionType.CHANGE_PAGE,
    payload: page,
  };
};

export const loadingStartAction = (loading: boolean): LoadingStartAction => {
  return {
    type: ActionType.LOADING_START,
    payload: loading,
  };
};

export const loadingDoneAction = (loading: boolean): LoadingDoneAction => {
  return {
    type: ActionType.LOADING_DONE,
    payload: loading,
  };
};

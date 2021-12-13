import { ActionType } from "../constants";
import type { User } from "api";

export interface IUserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IUsers {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUserData[];
}

export interface LoginAction {
  type: ActionType.LOGIN;
  payload: User;
}

export interface LoginSuccessAction {
  type: ActionType.LOGIN_SUCCESS;
  payload: string;
}

export interface LoginErrorAction {
  type: ActionType.LOGIN_ERROR;
  payload: string;
}

export interface FetchListAction {
  type: ActionType.FETCH_USERS_LIST;
  payload: number;
}

export interface FetchListSuccessAction {
  type: ActionType.USERS_LIST;
  payload: IUsers;
}

export interface LogoutAction {
  type: ActionType.LOGOUT;
}

export interface LoadingStartAction {
  type: ActionType.LOADING_START;
  payload: boolean;
}

export interface LoadingDoneAction {
  type: ActionType.LOADING_DONE;
  payload: boolean;
}

export type Action =
  | LoginAction
  | LoginSuccessAction
  | LoginErrorAction
  | FetchListAction
  | FetchListSuccessAction
  | LogoutAction
  | LoadingStartAction
  | LoadingDoneAction;

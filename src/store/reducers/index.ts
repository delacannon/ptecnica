import { ActionType } from "../constants";
import { Action } from "../actions";
import { IUsers } from "../actions";

interface AppState {
  token: string | null;
  users: IUsers;
  currentPage: number;
  error: string | null;
  loading: boolean;
}

const initialState: AppState = {
  token: null,
  users: {
    page: 0,
    per_page: 0,
    total: 0,
    total_pages: 0,
    data: [],
  },
  currentPage: 1,
  error: null,
  loading: false,
};

export const appReducer = (state: AppState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.LOGIN:
      return {
        ...state,
        error: null,
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case ActionType.LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ActionType.FETCH_USERS_LIST:
      return {
        ...state,
        currentPage: action.payload,
      };
    case ActionType.USERS_LIST:
      return {
        ...state,
        users: Object.assign({}, action.payload),
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        token: null,
      };
    case ActionType.LOADING_START:
      return {
        ...state,
        loading: action.payload,
      };
    case ActionType.LOADING_DONE:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

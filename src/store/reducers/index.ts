import {
  FETCH_USER,
  USER_FETCHED,
  FETCH_USERS,
  USERS_FETCHED,
  FETCH_ERROR,
  LOGOUT,
} from "../constants/constants";

const initialState = {
  token: null,
  users: {},
  currentPage: 1,
  error: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        error: null,
      };
    case USER_FETCHED:
      return {
        ...state,
        token: action.payload,
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_USERS:
      return {
        ...state,
        currentPage: action.payload,
      };
    case USERS_FETCHED:
      return {
        ...state,
        users: Object.assign({}, action.payload),
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

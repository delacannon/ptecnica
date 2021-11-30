import {
  FETCH_USER,
  USER_FETCHED,
  FETCH_USERS,
  USERS_FETCHED,
  USER_FETCHED_ERROR,
  LOGOUT,
} from "../constants/constants";

const initialState = {
  token: "",
  users: {},
  currentPage: 1,
  error: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
      };
    case USER_FETCHED:
      return {
        ...state,
        token: action.payload,
      };
    case USER_FETCHED_ERROR:
      return {
        ...state,
        token: action.payload,
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
        token: "",
      };
    default:
      return state;
  }
};

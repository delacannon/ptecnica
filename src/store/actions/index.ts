import {
  FETCH_USER,
  FETCH_USERS,
  USER_FETCHED,
  USER_FETCHED_ERROR,
  USERS_FETCHED,
  LOGOUT,
} from "../constants/constants";

export const fetchUser = (authData) => {
  return {
    type: FETCH_USER,
    payload: authData,
  };
};

export const fetchUserSuccess = (token) => {
  return {
    type: USER_FETCHED,
    payload: token,
  };
};

export const fetchUserError = (error) => {
  return {
    type: USER_FETCHED_ERROR,
    payload: error,
  };
};

export const fetchUsers = (page) => {
  return {
    type: FETCH_USERS,
    payload: page,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: USERS_FETCHED,
    payload: users,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

// TODO
// export const fetchUsersError = () => {};
// export const fetchUserError = () => {};

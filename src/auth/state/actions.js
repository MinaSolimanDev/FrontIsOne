import { login, getCurrentUser } from "../services/authServices";
import Types from "../state/types";
import axios from "axios";
import { API } from "../../common/constants";

const handleError = (err, type, dispatch) => {
  if (err.response) {
    if (err.response.status >= 500) {
      dispatch({ type, payload: ["Unexpected Error"] });
    } else if (err.response.status >= 400) {
      dispatch({ type, payload: Object.values(err.response.data) });
    }
  } else {
    dispatch({ type, payload: ["Connection Error"] });
  }
};

export const authRequest = () => ({ type: Types.AUTH_REQUEST });
export const cleanErrors = () => ({ type: Types.AUTH_CLEAN });

export const signIn = (values, redirect) => async (dispatch) => {
  try {

    const { data } = await login(values);
    redirect();

  } catch (err) {
    if (err.response) {
      if (err.response.status >= 500) {
        dispatch({ type: Types.AUTH_ERROR });
      } else if (err.response.status >= 400) {
        dispatch({
          type: Types.AUTH_ERROR,
          payload: Object.values(err.response.data),
        });
      }
    } else if (err.request) {
      dispatch({ type: Types.AUTH_ERROR, payload: ["Connection Error"] });
    }
  }
};

// Logout the user from the system
export const signOut = (redirect) => async (dispatch) => {
  localStorage.removeItem("user");
  redirect && redirect();
  dispatch({ type: Types.AUTH_CLEAN, payload: false });
};


// get current user logged in
export const getUser = (redirect, smster = 202) => async (dispatch) => {
  try {
    const user = await getCurrentUser(smster);

    dispatch({
      type: Types.AUTH_USER,
      payload: user,
    });
  } catch (err) {
    if (err.response) {
      if (err.response.status >= 500) {
        dispatch({
          type: Types.AUTH_ERROR,
          payload: ["Connection Error"],
        });
      } else if (err.response.status === 401 || err.response.status === 403) {
        localStorage.removeItem("user");
        redirect && redirect();
      } else if (err.response.status >= 400) {
        dispatch({
          type: Types.AUTH_ERROR,
          payload: Object.values(err.response.data),
        });
      }
    } else {
      dispatch({
        type: Types.AUTH_ERROR,
        payload: ["Connection Error"],
      });
    }
  }
};

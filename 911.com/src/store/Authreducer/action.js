import axios from "axios";
import { getData } from "../../utils/storage";
import { url } from "../../utils/url";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./action.type";

export const Signup = (payload) => (dispatch) => {
  console.log(payload);
  dispatch(Signup_request());
  return axios
    .post(`${url}/auth/signup`, payload)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: SIGNUP_SUCCESS });
      return res.data.msg;
    })
    .catch((err) => {
      dispatch(Signup_failure());
    });
};

export const Signup_request = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};

export const Signup_failure = () => {
  return {
    type: SIGNUP_FAILURE,
  };
};
export const Signin = (payload) => (dispatch) => {
  //console.log(payload);
  dispatch(Signin_request());

  return axios
    .post(`${url}/auth/login`, payload)
    .then((res) => {
      console.log(res, "pot");
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });

      return res.data.login;
    })
    .catch((err) => {
      dispatch(Signin_failure());
    });
};

export const Signin_request = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const Signin_failure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
};

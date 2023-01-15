import { getData, removeData, saveData } from "../../utils/storage";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./action.type";

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: getData("isAuth") || false,
  user: getData("user") || {},
};

export const reducer = (state = initialState, { type, payload }) => {
  // console.log(payload)
  switch (type) {
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: false,
        user: {},
      };
    }
    case SIGNUP_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isAuth: false,
        user: {},
      };
    }
    case SIGNUP_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        user: {},
      };
    }
    case LOGIN_SUCCESS: {
      saveData("isAuth", true);
      saveData("token", payload.token);
      //console.log(payload.user);
      saveData("user", JSON.stringify(payload.user));
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        user: payload.user,
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isAuth: false,
        user: {},
      };
    }
    case LOGIN_FAILURE: {
      removeData("isAuth");
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        user: {},
      };
    }
    case LOGOUT_SUCCESS: {
      removeData("isAuth");
      removeData("user");
      removeData("token");
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: false,
        user: {},
      };
    }
    default:
      return state;
  }
};

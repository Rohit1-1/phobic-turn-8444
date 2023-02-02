import axios from "axios";
import { url } from "../../utils/url";
import {
  GET_CART_DATA_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./action.type";
import { getData } from "../../utils/storage";

export const getProduct =
  (category, limit = 50) =>
  (dispatch) => {
    dispatch(getProduct_request());
    try {
      return axios
        .get(`${url}/product?category=${category}&limit=${limit}`)
        .then((res) => {
          dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
          console.log(res);
        });
    } catch (error) {
      dispatch(getProduct_failure());
    }
  };

export const getProduct_request = () => {
  return {
    type: GET_PRODUCT_REQUEST,
  };
};

export const getProduct_failure = () => {
  return {
    type: GET_PRODUCT_FAILURE,
  };
};

export const addtoCart = (payload) => (dispatch) => {
  let token = getData("token");
  console.log(token);
  try {
    return axios
      .post(`${url}/cart/addtocart`, payload, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        //console.log(res);
        // dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
        dispatch(getCartdata());
        return res.data.msg;
      });
  } catch (error) {
    dispatch(getProduct_failure());
  }
};

export const getCartdata = () => (dispatch) => {
  let token = getData("token");
  //console.log(token);
  try {
    return axios
      .get(`${url}/cart/cartproduct`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch({ type: GET_CART_DATA_PRODUCT_SUCCESS, payload: res.data });
        return res.data.msg;
      });
  } catch (error) {
    dispatch(getProduct_failure());
  }
};

export const updateCart = (payload) => (dispatch) => {
  let token = getData("token");
  // console.log(token);
  dispatch(getProduct_request());
  try {
    return axios
      .patch(`${url}/cart/addmore`, payload, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
        console.log(res);
        dispatch(getCartdata());
        return res.data.msg;
      });
  } catch (error) {
    dispatch(getProduct_failure());
  }
};

export const deleteCart = (id, payload) => (dispatch) => {
  const { productId, orderquantity } = payload;
  let token = getData("token");
  // console.log(token);
  dispatch(getProduct_request());
  try {
    return axios
      .delete(`${url}/cart/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
          productId: productId,
          orderquantity: orderquantity,
        },
      })
      .then((res) => {
        // dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
        console.log(res);
        dispatch(getCartdata());
        return res.data.msg;
      });
  } catch (error) {
    dispatch(getProduct_failure());
  }
};

export const orderplacedd = () => (dispatch) => {
  let token = getData("token");
  // console.log(token);
  dispatch(getProduct_request());
  try {
    return axios
      .delete(`${url}/cart/orderplaced/1`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
        console.log(res);
        dispatch(getCartdata());
        return res.data.msg;
      });
  } catch (error) {
    dispatch(getProduct_failure());
  }
};

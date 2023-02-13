import {
  GET_CART_DATA_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./action.type";

const initialState = {
  isLoading: false,
  isError: false,
  productdata: [],
  totalPage:0,
  cartdata: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_PRODUCT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        productdata: payload.product,
        totalPage:payload.totalPage
      };
    }
    case GET_CART_DATA_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        cartdata: payload,
      };
    }

    default:
      return state;
  }
};

import axios from "axios"
import  {url} from "../../utils/url"
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./action.type"
import { getData } from "../../utils/storage"

export const getProduct=(category,limit=50)=>(dispatch)=>{
  dispatch(getProduct_request())
try {
    return axios.get(`${url}/product?category=${category}&limit=${limit}`).then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
        console.log(res);
    })
} catch (error) {
    dispatch(getProduct_failure())
}

}


export const getProduct_request=()=>{
    return {
        type:GET_PRODUCT_REQUEST
    }
}

export const getProduct_failure=()=>{
    return {
        type:GET_PRODUCT_FAILURE
    }
}



export const addtoCart=(payload)=>(dispatch)=>{
    let token=getData('token')
    console.log(token);
    dispatch(getProduct_request())
  try {
      return axios.post(`${url}/cart/addtocart`,payload,{
        headers:{
            authorization :`Bearer ${token}`
        }
      }).then((res)=>{
         // dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
         return (res.data.msg)
          console.log(res);
      })
  } catch (error) {
      dispatch(getProduct_failure())
  }
  
  }
  



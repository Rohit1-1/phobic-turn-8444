import axios from "axios"
import { getData } from "../../utils/storage";
import {url} from "../../utils/url"
import { GET_PRODUCT_REQUEST,GET_PRODUCT_FAILURE,GET_PRODUCT_SUCCESS,ADD_PRODUCT_REQUEST,ADD_PRODUCT_FAILURE,ADD_PRODUCT_SUCCESS,UPDATE_PRODUCT_REQUEST,UPDATE_PRODUCT_FAILURE,UPDATE_PRODUCT_SUCCESS,DELETE_PRODUCT_REQUEST,DELETE_PRODUCT_FAILURE,DELETE_PRODUCT_SUCCESS, GET_ALLUSERS_REQUEST, GET_ALLUSERS_FAILURE, GET_ALLUSERS_SUCCESS, DELETE_USER_SUCCESS, DELETE_USER_REQUEST, DELETE_USER_FAILURE} from "./action.type";


export const getProduct=(num=1)=>(dispatch)=>{
    dispatch(getProduct_request())
    let token=getData('admintoken')
  try {
    return axios.get(`${url}/product/allproduct?num=${num}`,{
        headers:{
            authorization :`Bearer ${token}`
        }
    }).then((res)=>{
        console.log(res);
         dispatch({type:GET_PRODUCT_SUCCESS,payload:res})
    }).catch((err)=>{
    dispatch(getProduct_failure())
    })
  } catch (error) {
    return ('something went wrong')
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


 export const addProduct=(payload)=>(dispatch)=>{
  
    dispatch(addProduct_request())
    let token=getData('admintoken')
  try {
    return axios.get(`${url}/product/allproduct`,payload,{
        headers:{
            authorization :`Bearer ${token}`
        }
    }).then((res)=>{

    }).catch((err)=>{
    dispatch(addProduct_failure())
    })
  } catch (error) {
    
    return ('something went wrong')
 }
}
 

 export const addProduct_request=()=>{
     return {
         type:ADD_PRODUCT_REQUEST
     }
 }
 
 export const addProduct_failure=()=>{
     return {
         type:ADD_PRODUCT_FAILURE
     }
 }



 export const updateProduct=(payload)=>(dispatch)=>{
    dispatch(updateProduct_request())
    let token=getData('admintoken')
  try {
    return axios.patch(`${url}/product/allproduct`,payload,{
        headers:{
            authorization :`Bearer ${token}`
        }
    }).then((res)=>{

    }).catch((err)=>{
    dispatch(updateProduct_failure())
    })
  } catch (error) {
    
    return ('something went wrong')
    
 }
}
 

 export const updateProduct_request=()=>{
     return {
         type:UPDATE_PRODUCT_REQUEST
     }
 }
 
 export const updateProduct_failure=()=>{
     return {
         type:UPDATE_PRODUCT_FAILURE
     }
 }


 export const deleteProduct=(id)=>(dispatch)=>{
   
    dispatch(deleteProduct_request())
    let token=getData('admintoken')
  try {
    return axios.delete(`${url}/product/allproduct/${id}`,{
        headers:{
            authorization :`Bearer ${token}`
        }
    }).then((res)=>{
        
         dispatch(getProduct())
         return(true)
         
    }).catch((err)=>{
    dispatch(deleteProduct_failure())
    return(false)
    })
  } catch (error) {
    return ('something went wrong')
        

 }
}
 

 export const deleteProduct_request=()=>{
     return {
         type:DELETE_PRODUCT_REQUEST
     }
 }
 
 export const deleteProduct_failure=()=>{
     return {
         type:DELETE_PRODUCT_FAILURE
     }
 }




 export const getUsers=()=>(dispatch)=>{
    console.log('users')
    dispatch(getUsers_request())
    let token=getData('admintoken')
  try {
    return axios.get(`${url}/auth/alluser`,{
        headers:{
            authorization :`Bearer ${token}`
        }
    }).then((res)=>{
        console.log(res);
         dispatch({type:GET_ALLUSERS_SUCCESS,payload:res.data})
    }).catch((err)=>{
    dispatch(getUsers_failure())
    })
  } catch (error) {
    return ('something went wrong')
  }
    
 }
 

 export const getUsers_request=()=>{
     return {
         type:GET_ALLUSERS_REQUEST
     }
 }
 
 export const getUsers_failure=()=>{
     return {
         type:GET_ALLUSERS_FAILURE
     }
 }




 export const deleteUser=(id)=>(dispatch)=>{
    console.log('users')
    dispatch(deleteUser_request())
    let token=getData('admintoken')
  try {
    return axios.delete(`${url}/auth/deleteuser/${id}`,{
        headers:{
            authorization :`Bearer ${token}`
        }
    }).then((res)=>{
      //  console.log(res);
        dispatch(getUsers())
    }).catch((err)=>{
    dispatch(deleteUser_failure())
    })
  } catch (error) {
    return ('something went wrong')
  }
    
 }
 

 export const deleteUser_request=()=>{
     return {
         type:DELETE_USER_REQUEST
     }
 }
 
 export const deleteUser_failure=()=>{
     return {
         type:DELETE_USER_FAILURE
     }
 }

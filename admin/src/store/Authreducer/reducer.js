import { getData, removeData, saveData } from "../../utils/storage"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./action.type"


const initialState={
    isLoading:false,
    isError:false,
    
    isAdmin:getData("isAdmin")||false,
    admin:getData("admin")||{}
}

export const reducer=(state=initialState,{type,payload})=>{
   // console.log(payload)
  switch(type){
    case(LOGIN_SUCCESS):{
        saveData("isAdmin", true);
      saveData("admintoken", payload.token);
      //console.log(payload.admin);
      saveData("admin", JSON.stringify(payload.user));
        return{
            ...state,
            isLoading:false,
            isError:false,
            isAdmin:true,
            admin:payload.user
        }
    }
    case(LOGIN_REQUEST):{
        return{
            ...state,
            isLoading:true,
            isError:false,
            isAdmin:false,
            admin:{}
        }
    }
    case(LOGIN_FAILURE):{
        removeData('isAdmin')
        return{
            ...state,
            isLoading:false,
            isError:true,
            isAdmin:false,
            admin:{}
        }
    }
    case(LOGOUT_SUCCESS):{
        removeData("isAdmin")
        removeData("admin")
        removeData("admintoken")
        return{
            ...state,
            isLoading:false,
            isError:false,
            isAdmin:false,
            admin:{}
        }
    }
    default:
        return state
}

}
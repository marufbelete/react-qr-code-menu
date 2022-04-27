import { signupActions } from "./signup-slice"
import { loginActions } from "./login-slice"

import axios from "axios"

export const registerUser=(data)=>{
    return async(dispatch)=>{
        try{
            console.log(data)
            const res=await axios.post('http://localhost:8000/register',data)
            dispatch(signupActions.status("success"))
        }
       catch(err)
       {
           console.log(err)
           console.log(err.response)
        dispatch(signupActions.status("error"))

       }

    }
}

export const loginUser=(data)=>{
    return async(dispatch)=>{
        try{
            const res=await axios.post('http://localhost:8000/login',data,{ withCredentials: true })
            console.log(res)
            dispatch(loginActions.isLoged(true))
        }
       catch(err)
       {
     
     dispatch(loginActions.isLoged(err.response.data.status))
     dispatch(loginActions.Message(err.response.data.message))
     console.log(err.response.data.message)
       }

    }
}
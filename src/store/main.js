import { configureStore} from "@reduxjs/toolkit";
import loginReducer from './login-slice'
import signupReducer from './signup-slice'

// const store=configureStore(authReducer)
// in tool kit we can edit existing state


const store=configureStore({
    //reducer:authReducer//if we have only one slice
   reducer:{login:loginReducer,signup:signupReducer}//for multiple slice with any key name
})
export default store;
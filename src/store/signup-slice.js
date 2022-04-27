import {createSlice} from '@reduxjs/toolkit'

const signupSlice=createSlice({
    name:"auth",
    initialState:{status:null,user:{isSubmited:false}},
    reducers:{
        signup(state,action){state.user={
            isSubmited:action.payload.IsSubmited,
            name:action.payload.NameValue,
            password:action.payload.PasswordValue,
            email:action.payload.EmailValue,
            confirmPassword:action.payload.ConfirmedPasswordValue}},
        status(state,action){state.status=action.payload}
    },
})
export default signupSlice.reducer;
export const signupActions=signupSlice.actions;
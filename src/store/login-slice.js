import { createSlice } from "@reduxjs/toolkit";
const initialState={isAuthenticated:false}
const loginSlice=createSlice({
    name:"auth",
    initialState:{status:null,isAuthenticated:false,errMessage:'',user:{isSubmited:false}},
    reducers:{
        login(state,action){state.user={
            isSubmited:action.payload.IsSubmited,
            password:action.payload.PasswordValue,
            email:action.payload.EmailValue}},
        isLoged(state,action){state.isAuthenticated=action.payload},
        status(state,action){state.status=action.payload},
        Message(state,action){state.errMessage=action.payload}

    },
})

export default loginSlice.reducer;
export const loginActions=loginSlice.actions;

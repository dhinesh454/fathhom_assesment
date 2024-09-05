import { createSlice } from "@reduxjs/toolkit";

let initialState = {isloggedIn:false,token:'',userProfile:{}};

const authSlice = createSlice({
    name:'authentication',
    initialState:initialState,
    reducers:{
        loginHandler(state,action){
            state.isloggedIn=true;
            state.token=action.payload.token;
        },
        logoutHandler (state,action){
            state.isloggedIn=false;
            state.token=''
        },
        setProfile(state,action){
            state.userProfile={...action.payload}
        }
    }
});


export default authSlice.reducer;
export const authActions = authSlice.actions;
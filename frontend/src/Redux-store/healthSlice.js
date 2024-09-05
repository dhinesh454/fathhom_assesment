import { createSlice } from "@reduxjs/toolkit";

let initialState = {health:[]};

const healthSlice = createSlice({
    name:'health',
    initialState:initialState,
    reducers:{
       setHealth(state,action){
        state.health=[...action.payload]
       },
       deleteHealth(state,action){
        state.health = state.health.filter((val)=> val._id !== action.payload._id)
       },
       addHealth(state,action){
        state.health.push(action.payload)
       }
    }
});


export default healthSlice.reducer;
export const healthAction = healthSlice.actions;
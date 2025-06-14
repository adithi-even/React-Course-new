import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status : false, //false means the user is not logged in yet, or user is not authenticated yet
    userData : null //if the user is not logged in then the data of the user is null which is equal to 0 
}

const authSlice = createSlice({
    name : "auth" , 
    initialState ,
    reducers : {
        login : (state , action)=>{
            state.status = true;  //user status will be true;
            state.userData = action.payload.userData;
        },
        logout : (state )=>{
            state.status = false;
            state.userData = null;
        }
    }
})

export const {login , logout} =  authSlice.actions // |||lr to todo redux . logout and login are actions .
// and we are exporting this so that we can use this in other components

export default authSlice.reducer 
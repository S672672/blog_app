import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false,
    useData : null
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(status,action)=>{
            state.status = true
            state.useData = action.payload.useData
        },
        logout:(state)=>{
            state.status = null
            state.useData = null
        }
    }
})

export const {login,logout} = authSlice.actions

export default authSlice.reducer
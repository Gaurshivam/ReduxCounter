import { createSlice } from "@reduxjs/toolkit";


const counter = createSlice({
    name:"data",
    initialState:{
        counter:0,
        data:4
    },
    reducers:{
        increment:(state)=>{
            state.counter =state.counter+1;
        },
        decrement:(state)=>{
            state.counter =state.counter - 1;
        },
        reset:(state)=>{
            state.counter = 0;
        }
    }
})

export const {increment,decrement,reset} = counter.actions
export default counter.reducer;
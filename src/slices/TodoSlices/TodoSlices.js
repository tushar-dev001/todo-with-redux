import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'ami',
    initialState: [],
    reducers: {
        todoList: (state, action)=>{
            console.log('ami todoList');
            state.push(action.payload)
        }
    }
})

export const {todoList} = todoSlice.actions;

export default todoSlice.reducer
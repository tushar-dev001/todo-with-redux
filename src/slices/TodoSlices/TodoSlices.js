import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        todoList: (state, action)=>{
            console.log('ami todoList');
            state.push(action.payload)
        },

        deleteTodo: (state, action)=>{
            console.log("ami todo theke aschi");
            const id = action.payload
            console.log(id);
            return state.filter(todo => todo.id !== id)
        },

        editTodo: (state, action)=>{
            console.log("ami edit theke aschi");
            const {id, text} = action.payload;
            // console.log(id, text);
            const todo = state.find(todo => todo.id === id);
            // console.log(text);
            if(todo){
                todo.text = text;
            }
        }
    }
})

export const {todoList, deleteTodo, editTodo} = todoSlice.actions;

export default todoSlice.reducer
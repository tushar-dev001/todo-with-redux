import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        adTodo: (state, action)=>{
            console.log('ami todoList');
            state.push(action.payload)
        },

        deleteTodo: (state, action)=>{
            console.log("ami todo theke aschi");
            const id = action.payload
            console.log(id);
            //todo theke jei id ta asteche sei idr sathe jodi delete button e click kora id ta na mile tahole tumi filter kore state er vetore rekhe diba. r jodi mile tahole delete kore diba.
            return state.filter(todo => todo.id !== id)
        },

        editTodo: (state, action)=>{
            console.log("ami edit theke aschi");
            const {id, text} = action.payload;
            // console.log(id, text);
            //todo theke jei id ta asteche sei idr sathe ami jei button a click kortechi sei id ta khuje ber korba. tarpor todo er id er sathe milaba. jodi mile jai tahole tumi edit korba.
            const todo = state.find(todo => todo.id === id);
            // console.log(text);
            if(todo){
                //amar condition jodi mile jai tahole tumi todo.text er vetore text ta ke set kore diba.
                todo.text = text;
            }
        }
    }
})

export const {adTodo, deleteTodo, editTodo} = todoSlice.actions;

export default todoSlice.reducer
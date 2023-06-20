import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from '../slices/TodoSlices/TodoSlices'

export default configureStore({
    reducer:{
        toDo: TodoReducer,
    }
})
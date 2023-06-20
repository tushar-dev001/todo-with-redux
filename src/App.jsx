import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoList } from "./slices/TodoSlices/TodoSlices";

function App() {
  const [text, setText] =  useState("");
  const dispatch = useDispatch();
  
  //useSelector diye data neoar somoi store theke data nei.
  const todos = useSelector(state => state.toDo)
  
  const handleChange =(e)=>{
    setText(e.target.value)
  }

  const handleSubmit =()=>{
    if(text){
      //dispatch diye data pathanor somoi reducer ke call korte hobe. aegulo jehetu array er moddhe rakhte hocche r UI te data dekhano lagbe tai map korte hobe tai text ke pathanor somoi {text} object akare data pathate hobe.
      dispatch(todoList({text}))
      
    }
    setText("")
  }

  return (
    <>
      <div className="root">
      <h2>This is Todo</h2>
      <input onChange={handleChange} value={text} type='text'/>
      <button onClick={handleSubmit}>Add Todo</button>

      {
        todos.map((todo, index) =>(
          <li key={index}>{todo.text}</li>
        ))
      }
    </div>
    </>
  );
}

export default App;

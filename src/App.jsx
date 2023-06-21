import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoList } from "./slices/TodoSlices/TodoSlices";
import TodoList from "./components/TodoList";

function App() {
  const [text, setText] =  useState("");
  const dispatch = useDispatch();
  
  const handleChange =(e)=>{
    setText(e.target.value)
  }

  const handleSubmit =()=>{
    if(text){
      //dispatch diye data pathanor somoi reducer ke call korte hobe. aegulo jehetu array er moddhe rakhte hocche r UI te data dekhano lagbe tai map korte hobe tai text ke pathanor somoi {text} object akare data pathate hobe.
      dispatch(todoList({
        id: Date.now(),
        text: text
      }))
    }
    setText("")
  }


  return (
    <>
      <div className="container">
      <h2>This is Todo</h2>
      <input onChange={handleChange} value={text} type='text'/>
      <button onClick={handleSubmit}>Add Todo</button>

      <TodoList/>
    </div>
    </>
  );
}

export default App;

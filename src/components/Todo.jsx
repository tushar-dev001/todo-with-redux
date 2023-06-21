import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../slices/TodoSlices/TodoSlices";

const Todo = ({ todo }) => {
  const [text, setText] = useState(todo.text);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  const handleDlelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const handleEditInput = (event) => {
    setText(event.target.value);
  };

  const handleCancle = () => {
    console.log("calcle");
    setEdit(false);
    setText(todo.text);
  };

  const handleSave = () => {
    dispatch(
      editTodo({
        id: todo.id,
        text: text,
      })
    );
    setEdit(false);
  };

  return (
    <div>
      {edit ? (
        <div>
          <input value={text} onChange={handleEditInput} type="text" />
          <button onClick={handleCancle}>Cancle</button>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <span>{todo.text}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDlelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Todo;

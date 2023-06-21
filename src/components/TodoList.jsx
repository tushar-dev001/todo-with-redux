import { useSelector } from 'react-redux'
import Todo from './Todo'

const TodoList = () => {

      //useSelector diye data neoar somoi store theke data nei.
  // const todos = useSelector(state =>console.log( state.toDo))
  const todos = useSelector(state =>state.toDo)

  return (
    <>
        {
        todos.map((todo) =>(
          // <li key={todo.id}>{todo.text} -{todo.id}</li>
          <Todo key={todo.id} todo={todo}/>
        ))
      }
    </>
  )
}

export default TodoList
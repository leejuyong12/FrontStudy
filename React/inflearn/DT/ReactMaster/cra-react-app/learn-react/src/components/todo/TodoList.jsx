import TodoItem from './TodoItem';
import {useContext} from 'react';
import { useTodos } from '../../context/TodoContext';

function TodoList(){
  const todos = useTodos();
  return(
    <ul>
      {todos.map((item, id)=>(
        <li key={id}>
          <TodoItem 
          item={item} 
          ></TodoItem>
        </li>
      ))}
    </ul>
  )

}
export default TodoList;
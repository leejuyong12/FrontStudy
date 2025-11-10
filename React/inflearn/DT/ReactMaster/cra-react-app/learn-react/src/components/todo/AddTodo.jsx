import {useState } from 'react';
import { useTodosDispatch, useTodos } from '../../context/TodoContext';

export default function AddTodo({onAddTodo}){
  const [todoText, setTodoText] = useState('');
  const todos = useTodos();
  const dispatch = useTodosDispatch();
  const handleAddTodo = (text) =>{
    dispatch({
      type:'added',
      nextId:todos.length,
      todoText : text
    })
  }

  return(
      <div>
        <input 
          type="text" 
          value={todoText} 
          onChange={(e)=> setTodoText(e.target.value)} 
          onKeyDown={(e)=>{
  //input에 포커스 되어있을때 enter키 누르면 추가되는 기능
            if(e.key === "Enter" && e.nativeEvent.isComposing === false){
              handleAddTodo(e.target.value);
              setTodoText('');
            }
          }}></input>
        <button onClick={()=>{
          setTodoText('');
          handleAddTodo(todoText);
        }}>추가</button>
      </div>
  )
}
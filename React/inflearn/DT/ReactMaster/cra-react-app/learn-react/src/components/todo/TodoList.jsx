import TodoItem from './TodoItem';
import { useTodos } from '../../context/TodoContext';
import {useState} from 'react';

function TodoList(){
  const todos = useTodos();
  const [isDone, setIsDone] = useState(false);

  const getFilteredTodos = () =>{
    if(!isDone){ //false면 그냥 전체 목록 보여주기
      return todos;
    }
    return todos.filter((todo)=> todo.done);
  }
  const filteredTodos = getFilteredTodos();

  const getStatsCount = () => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo)=> todo.done).length;
    return{
      totalCount,
      doneCount
    }
  }

  

  const {totalCount, doneCount} = useMemo(()=> getStatsCount(), [todos]);

  return(
    <>
    <div>
      <input 
        id="isDone"
        type="checkbox"
        checked={isDone}
        onChange={(e) => setIsDone(e.target.checked)}
      >
      </input>
      <label htmlFor="isDone">완료된 항목 보기({doneCount}/{totalCount})</label>
    </div>
    <ul>
      {filteredTodos.map((item, id)=>(
        <li key={id}>
          <TodoItem 
          item={item} 
          ></TodoItem>
        </li>
      ))}
    </ul>
    </>
  )

}
export default TodoList;
import './App.css'
import {useReducer, useState} from 'react'
import TodoList from './components/todo/TodoList';
import todoReducer from './reducer/todo-reducer';
import {useImmerReducer} from 'use-immer';




function AppTodo(props) {
  const [todoText, setTodoText] = useState('');

  //reducer 활용
  const [todos, dispatch] = useImmerReducer(todoReducer, [
  //const [todos, dispatch] = useReducer(todoReducer, [
    {id:0, text:"HTML&CSS 공부하기", done:false},
    {id:1, text:"자바스크립트 공부하기", done:false}
  ])



  const [insertAt, setInsertAt] = useState(todos.length - 1);


  const handleTodoTextChange = (e) => {
      setTodoText(e.target.value);
  }
  //꼭! 새 배열 복사해서 넣기
  const handleAddTodo = () =>{
    dispatch({
      type:'added',
      nextId:todos.length,
      todoText
    })

    //아래 코드를 dispatch로 바꿈
    // const nextId = todos.length;
    // setTodos([
    //   ...todos,
    //   {id : nextId, text: todoText, done:false}
    // ])
    
    //여기서 input 내에 있는 값을 빈값으로 만들어주면 된다.
    setTodoText('');
  }

  const handleAddTodoByIndex = () => {

    dispatch({
      type:'added_index',
      insertAt,
      nextId:todos.length,
      todoText
    })
    //아래 코드를 dispatch로 바꿈
    // const nextId = todos.length;
    // const newTodos = [
    //   //삽입 지점 이전 항목
    //   //0부터 insertAt까지 잘라낸다.
    //   ...todos.slice(0, insertAt),
    //   {id:nextId, text: todoText, done:false},
    //   //삽입 지점 이후 항목
    //   ...todos.slice(insertAt)

    // ];
    // setTodos(newTodos);
    setTodoText('');
  }

  //기능을 자식 컴포넌트에서 만들 생각하지말고
  //부모 컴포넌트에서 props로 기능을 내려주면 된다.
  //삭제 기능
  const handleDeleteTodo = (deleteId) =>{

    dispatch({
      type:'deleted',
      deleteId
    })
    //filter 문법 확인!
    //해당하는 id의 값을 빼는거라고 생각하지말고
    //해당하는 id의 값만 빼고 반환하기
    // 아래 코드 dispatch 로 바꿈
    // const newTodos = todos.filter(item => item.id !== deleteId);
    // setTodos(newTodos);
  }
  //input에 포커스 되어있을때 enter키 누르면 추가되는 기능
  const handleKeyDown = (e) =>{
    if(e.key === "Enter"){
      handleAddTodo();
    }
  }
  //done여부를 true/false 바꾸는 기능
  const handleToggleTodo = (id, done) =>{
    // 아래 코드 dispatch 로 바꿈
    dispatch({
      type:'done',
      id,
      done
    })
    //기존 배열 안의 객체 속성을 변경!
    // const nextTodos = todos.map(item => {
    //   if(item.id === id){
    //     return {...item, done};
    //   }
    //   return item;
    // })
    // setTodos(nextTodos);
  }
  //배열 순서 뒤바꿈(꼭! reverse는 원본내용을 바꿔버리니까 원본을 복사해서 사용하자)
  const handleReverse = () => {
    // 아래 코드 dispatch 로 바꿈
    dispatch({
      type:'reverse'
    })


    //아래 주석처리된 내용은 reverse 사용시!
    // const nextTodos = [...todos];
    // nextTodos.reverse();
    // setTodos(nextTodos);
    
    //2023 최신 API에서는 toReversed 사용하면 배열의 순서를 거꾸로 한 새로운 배열을 반환한다.
    //setTodos(todos.toReversed());
  }

  return (
    <div>
      <h2>할일목록</h2>
      <div>
        <input 
          type="text" 
          value={todoText} 
          onChange={handleTodoTextChange} 
          onKeyDown={handleKeyDown}></input>
        <button onClick={handleAddTodo}>추가</button>
      </div>
      <div>
        <select value={insertAt} onChange={(e) => setInsertAt(e.target.value)}>
          {todos.map((item, index)=>(
            <option key={item.id} value={index}>{index} 번째</option>
          ))}
        </select>
        <button onClick={handleAddTodoByIndex}>{insertAt} 번째 추가</button>
      </div>
      <div>Preview : {todoText}</div>
      <button onClick={handleReverse}>Reverse</button>
      <TodoList 
      todos={todos}
      onDeleteTodo={handleDeleteTodo}
      onToggleTodo={handleToggleTodo}
      />
    </div>
  );
}

export default AppTodo;
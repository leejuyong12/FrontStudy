import './App.css'
import {useState} from 'react'
import TodoList from './components/todo/TodoList';


function AppTodo(props) {
  const [todoText, setTodoText] = useState('');

  const [todos, setTodos] = useState([
    {id:0, text:"HTML&CSS 공부하기", done:false},
    {id:1, text:"자바스크립트 공부하기", done:false}
  ]);
  const handleTodoTextChange = (e) => {
      setTodoText(e.target.value);
  }
  //꼭! 새 배열 복사해서 넣기
  const handleAddTodo = () =>{
    const nextId = todos.length;
    setTodos([
      ...todos,
      {id : nextId, text: todoText}
    ])
    //여기서 input 내에 있는 값을 빈값으로 만들어주면 된다.
    setTodoText('');
  }
  //기능을 자식 컴포넌트에서 만들 생각하지말고
  //부모 컴포넌트에서 props로 기능을 내려주면 된다.
  //삭제 기능
  const handleDeleteTodo = (deleteId) =>{
    //filter 문법 확인!
    //해당하는 id의 값을 빼는거라고 생각하지말고
    //해당하는 id의 값만 빼고 반환하기
    const newTodos = todos.filter(item => item.id !== deleteId);
    setTodos(newTodos);
  }
  //input에 포커스 되어있을때 enter키 누르면 추가되는 기능
  const handleKeyDown = (e) =>{
    if(e.key === "Enter"){
      handleAddTodo();
    }
  }
  //done여부를 true/false 바꾸는 기능
  const handleToggleTodo = (id, done) =>{
    //기존 배열 안의 객체 속성을 변경!
    //여기부터다 !!!!! 17분30초!!! todos.map( => )

  }
  return (
    <div>
      <h2>할일목록</h2>
      <input 
        type="text" 
        value={todoText} 
        onChange={handleTodoTextChange} 
        onKeyDown={handleKeyDown}></input>
      <button onClick={handleAddTodo}>추가</button>
      <TodoList 
      todos={todos}
      onDeleteTodo={handleDeleteTodo}
      onToggleTodo={handleToggleTodo}
      />
    </div>
  );
}

export default AppTodo;
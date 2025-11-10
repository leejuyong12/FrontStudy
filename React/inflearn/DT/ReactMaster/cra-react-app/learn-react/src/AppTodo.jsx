import './App.css'
import TodoList from './components/todo/TodoList';
import AddTodo from './components/todo/AddTodo';
import {TodoProvider} from './context/TodoContext';

function AppTodo(props) {

  return (
    //Context로 감싸줘서 todos와 dispatch를 props없이 하위 컴포넌트에서 사용하기 만들기
    <TodoProvider>
        <h2>할일목록</h2>
        <AddTodo></AddTodo>
        <TodoList></TodoList>
    </TodoProvider>
  );
}

export default AppTodo;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoList></TodoList>
    </div>
  );
}

export default App;
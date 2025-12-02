import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoInfo from './components/TodoInfo';
import { Routes, Route } from "react-router-dom";
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoList></TodoList>}/>
      <Route path="/TodoInfo/:id" element={<TodoInfo/>} />
    </Routes>
  );
}

export default App;
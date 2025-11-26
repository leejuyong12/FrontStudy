import { useState } from "react";

interface Todo{
    id: number;
    text : string;
    done: boolean;
}



export default function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState('')
    
    const addTodo = () => {
        const newTodo = {
            id:Date.now(),
            text:input,
            done:false

        }
        setTodos([...todos, newTodo]);
        setInput('');
    }
    const toggleTodo = (id:number) => {
        setTodos(todos.map((t) => t.id === id ? {...t, done: !t.done} : t))
    }
    const deleteTodo = (id:number) => {
        setTodos(todos.filter((t) => t.id !== id))
    }
    return (
        <div>
            <h1>Todo List</h1>

            {/* 할 일 입력 */}
            <input
                onChange={(e)=>{
                    setInput(e.target.value)
                }}
                placeholder="Write what to do!"
            >
            </input>
            <button onClick={addTodo}>AddTodo</button>
            {/* 할 일 입력 */}

            {/* 할 일 목록 */}
            <ul>
                {todos.map((todo)=>(
                    <li
                        key={todo.id}
                    >
                    
                    <input
                        type="checkbox"
                        checked={todo.done}
                        onChange={()=>toggleTodo(todo.id)}
                    ></input>
                    <span>{todo.text}</span>
                    <button onClick={()=> deleteTodo(todo.id)}>X</button>
                    </li>
                    
                ))}

            </ul>
            {/* 할 일 목록 */}
            
        </div>
    );
}

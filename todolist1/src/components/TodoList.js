import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const[todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }
    return (
    <div>
        <h1>Todo List</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo todos={todos} removeTodo={removeTodo}/>
    </div>
  );
}

export default TodoList
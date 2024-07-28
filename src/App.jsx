import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';
import React from "react"

function useSemiPersistentState() {
  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem('savedTodoList')) || []
  );

 React.useEffect(() => {
        localStorage.setItem('savedTodoList',JSON.stringify(todoList));
    }, [todoList, setTodoList]);

    return [todoList, setTodoList];
}

function App() {

  const [todoList, setTodoList] = useSemiPersistentState();

    function addTodo(newTodo){
        setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
   }

  return (
    <div>
        <h1>Todo list</h1>
        <h1>Add Todo Form</h1>
        <AddTodoForm onAddTodo={addTodo} />
        <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
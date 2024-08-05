import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';
import React from "react";

function useSemiPersistentState() {
  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem('savedTodoList')) || []
  );
 React.useEffect(() => {
        localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }, [todoList]);
    return [todoList, setTodoList];
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

    function addTodo(newTodo){
        setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
   }
    function removeTodo(id){
        const filteredTodos = todoList.filter((todo) => todo.id !== id);
        setTodoList(filteredTodos);
   }

  return (
    <div>
        <h1  style={{ color: "magenta" }}>Todo list</h1>
        <h1  style={{ color: "green" }}>Add Todo Form</h1>
        <AddTodoForm onAddTodo={addTodo} />
        <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
    </div>
  );
}

export default App;
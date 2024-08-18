import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';
import React from "react";

function App() {
 const [todoList, setTodoList] = React.useState([]);
 const [isLoading, setIsLoading] = useState(true);
    React.useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                const existingTodo = JSON.parse(localStorage.getItem('savedTodoList')) ?? [];
                const object = {
                    data: {
                        todoList: existingTodo,
                    },
                };
                    resolve(object);
            }, 2000);
        }).then((result) => {
            setTodoList(result.data.todoList);
            setIsLoading(false);
        });
    }, []);

 React.useEffect(() => {
        if(isLoading){
            return;
        }
        localStorage.setItem('savedTodoList',JSON.stringify(todoList));
    }, [todoList, isLoading]);

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
        {isLoading ? <p>Loading...</p> : <TodoList onRemoveTodo={removeTodo} todoList={todoList} />}
    </div>
  );
}

export default App;
import React, { useState } from "react";
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

    function handleTitleChange(event) {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    function handleAddTodo(event) {
        event.preventDefault();
        const form = event.target;
        const newTodo = {
            title: todoTitle,
            id: Date.now(),
        };
        onAddTodo(newTodo);
        setTodoTitle("");
    }

  return (
    <form onSubmit={handleAddTodo}>
        <label htmlFor="todoType">Enter todo type</label>
        <input
            id="todoTitle"
            type="text"
            name="title"
            value={todoTitle}
            onChange={handleTitleChange}
        />
        <button type="submit">Add Todo</button>
    </form>
  ) ;
}

export default AddTodoForm;
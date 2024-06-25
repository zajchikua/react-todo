import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

function AddTodoForm(props) {
    const handleAddTodo = ( event ) => {
        event.preventDefault();
        let todoTitle = event.target.title.value;
        console.log(todoTitle);
        event.target.reset();
        props.onAddTodo(todoTitle);
    };

  return (
    <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title</label>
        <input id="todoTitle" type="text" name="title" />
        <button type="submit">Add</button>
    </form>
  ) ;
}

export default AddTodoForm;
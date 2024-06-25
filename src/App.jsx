import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import TodoList from "./TodoList.jsx"
import AddTodoForm from "./AddTodoForm.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h1>Todo list</h1>
        <TodoList />
        <hr />
        <h1>Add Todo Form</h1>
        <AddTodoForm />
    </div>
  ) ;
}

export default App;

/*
Refactor App.jsx to use new TodoList component (see below)
 Open /src/App.jsx
 Import TodoList --> ??? TODO
 Below the level-one heading, use the TodoList component*/
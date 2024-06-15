import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import TodoList from "./TodoList.jsx"
import AddTodoForm from "./AddTodoForm.jsx"

const todoList = [
	{
		id: "001",
		title: "Complete lesson 1 for CTD",
		url: "https://classes.codethedream.org/course/react-v2/hawk?week=2",
		author: "Nastya M.",
		num_comments: 0,
		points: 5,
	},
	{
		id: "002",
		title: "Setup printer for the MAC",
		url: "https://classes.codethedream.org/course/react-v2/hawk?week=1",
        author: "Nastya & Mom",
        num_comments: 1,
        points:2,
	},
	{
		id: "003",
		title: "Collect documents for the passport",
		url: "https://classes.codethedream.org/course/react-v2/hawk?week=3",
        author: "Nastya & Dad",
        num_comments: 2,
        points:2,
	},
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h1>Todo list</h1>
        <TodoList />
        <hr />
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
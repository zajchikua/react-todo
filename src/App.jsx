import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';

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

  //const setNewTodo = React.useState('');

  return (
    <div>
        <h1>Todo list</h1>
        <TodoList />
        <TodoList title="My Todo List" todoList={todoList} />
        <hr />
        <h1>Add Todo Form</h1>
        <AddTodoForm />
    </div>
  );
}

export default App;
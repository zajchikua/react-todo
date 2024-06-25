import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const todoList = [
	{
		id: '001',
		title: 'Complete lesson 1 for CTD',
	},
	{
		id: '002',
		title: 'Setup printer for the MAC',
	},
	{
		id: '003',
		title: 'Collect documents for the passport',
	},
	];

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
        <h1>Todo list</h1>
	    <ul>
		    {list.map(function (todoList){
		    return <li key={todoList.id}>{todoList.title}</li>;
		    })}
	    </ul>
    </div>
  ) ;
}

export default App
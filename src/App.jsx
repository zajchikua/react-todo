import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx';
import React from "react";

function App() {
 const [todoList, setTodoList] = React.useState([]);
 const [isLoading, setIsLoading] = React.useState(true);

 async function fetchData() {

    const options = {
            method : 'GET',
            headers : {
            Authorization : `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
        }
    };

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;

     try {
        const response = await
            fetch(url, options);

            if (!response.ok) {
              const message = `Error: ${response.status}`;
              throw new Error(message);
            }

            const data = await response.json();
            console.log(data);
            const todos = data.records.map((todo) => {
               const newTodo =  {
                   id: todo.id,
                   title: todo.fields.title
               }
               return newTodo;
           });

              setTodoList(todos);
              setIsLoading(false);

           } catch (error) {
               console.log(error.message)
           }
        };

async function postTodo(todo) {
    if (typeof todo !== 'string' || todo.trim() === '') {
            console.log("Invalid todo title. It must be a non-empty string.");
            return null;
        }
        try{
        const airtableData = {
              fields: {
                title: todo,
              },
            };
         const response = await
               fetch(`https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/Default`
               , {
                    method : "POST",
                    headers: {
                        "Content-Type" : "application/json",
                        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
                        },
                        body : JSON.stringify(airtableData),
                   }
               );

                   if (!response.ok) {
                     const message = `Error: ${response.status}`;
                     throw new Error(message);
                   }
                const dataResponse = await response.json();
                return dataResponse;
        } catch (error) {
             console.log(error.message);
             return null;
         }
    };

    useEffect(() => {
       fetchData();
    }, []);

    useEffect(() => {
        if(isLoading){
            return;
        }
        localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }, [todoList, isLoading]);

    async function addTodo(newTodoTitle){
        const result = await postTodo(newTodoTitle);
        if(result) {
            const newTodo = {
                title: result.fields.title,
                id: result.id
            };
            setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
        }
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
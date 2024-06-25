import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import * as React from 'react';

function TodoListItem({todo}) {

  return (
    <li>
        <span>
            <a href={todo.url}>{todo.title}</a>
        </span>
        <span>{todo.author}</span>
        <span>{todo.num_comments}</span>
        <span>{todo.points}</span>
    </li>
  ) ;
}
//console.log('Todo Item Props:', todo);

export default TodoListItem;
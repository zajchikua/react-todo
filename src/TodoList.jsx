import * as React from 'react';
import TodoListItem from "./TodoListItem.jsx"

export default function TodoList({todoList}) {
    return (
        <div>
    	    <ul>
                {todoList.map((todo) => (
                    <TodoListItem key={todo.id} title={todo.title} />
                ))}
    	    </ul>
        </div>
    );
}
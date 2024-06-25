import * as React from 'react';
import TodoListItem from "./TodoListItem.jsx"

function TodoList( {title, todoList = []}) {
    return (
        <div>
            <h2>{title}</h2>
    	    <ul>
    		    {todoList.map(todo => (
                    <TodoListItem key={todo.id} todo={todo} />
    		    ))}
    	    </ul>
        </div>
    );
}
//console.log('TodoList Props:', title, todoList);

export default TodoList;
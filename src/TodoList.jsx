import * as React from 'react';
import TodoListItem from "./TodoListItem.jsx";

export default function TodoList({ todoList, onRemoveTodo }) {
    return (
    	    <ul>
                {todoList.map((todo) => (
                    <TodoListItem
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        onRemoveTodo={onRemoveTodo}
                    />
                ))}
    	    </ul>
    );
}
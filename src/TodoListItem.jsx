import * as React from 'react';

export default function TodoListItem({ title, onRemoveTodo, id }) {
  return (
        <li>
            {title} <button onClick={() => onRemoveTodo(id)}> Delete </button>
        </li>
  );
}
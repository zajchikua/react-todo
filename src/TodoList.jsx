import * as React from 'react';

function TodoList() {
    return (

        <div>
            <h1>Todo list</h1>
    	    <ul>
    		    {list.map(function (todoList){
    		    return
    		    <li key={todoList.id}>
    		        <span>
    		            <a href={todoList.url}>{todoList.title}</a>
    		        </span>
    		        <span>{todoList.author}</span>
    		        <span>{todoList.num_comments}</span>
                    <span>{todoList.points}</span>
    		    </li>;
    		    })}
    	    </ul>
        </div>
      ) ;

}

export default TodoList;
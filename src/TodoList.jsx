import * as React from 'react';

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

function TodoList() {
    return (

        <div>
    	    <ul>
    		    {todoList.map(function (todoList){
    		        return (
    		            <li key={todoList.id}>
    		                <span>
    		                    <a href={todoList.url}>{todoList.title}</a>
    		                </span>
    		                <span>{todoList.author}</span>
    		                <span>{todoList.num_comments}</span>
                            <span>{todoList.points}</span>
    		            </li>
    		        );
    		    })}
    	    </ul>
        </div>
    );
}

export default TodoList;
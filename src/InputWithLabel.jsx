import * as React from 'react';
import { useEffect, useRef } from 'react';

export function InputWithLabel(props) {
        const inputRef = useRef();
        useEffect(() => {
          inputRef.current.focus();
        });
    return (
    <>
        <label htmlFor="todoType">{props.children}</label>
            <input
                id="todoType"
                name="type"
                ref={inputRef}
                value={props.todoTitle}
                onChange={props.handleTitleChange}
            />
    </>
);
}
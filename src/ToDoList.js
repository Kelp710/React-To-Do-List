import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({todolist}) => {
    return(
        <div>
            {todolist.map(todo => {
                return(
                    <ToDo todo={todo} />
                )
            })}
        </div>
    );
};

export default ToDoList
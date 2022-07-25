import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({todolist, handleToggle, handleFilter}) => {
    return(
        <div>
            {todolist.map(todo => {
                return(
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <button style={{margin: "20px"}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default ToDoList
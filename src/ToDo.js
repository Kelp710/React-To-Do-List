import React from 'react';

const ToDo = ({todo}) => {
    return(
        <div className={todo.complete ? "strike" : "hit"}>
            {todo.task}
        </div>
    )
}

export default ToDo
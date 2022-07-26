import React, { useState } from 'react';

const ToDoForm = ({addTask}) => {

    const [userinput, setUserInput] = useState("omeko");

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userinput);
        setUserInput("");
    }
    return(
    <form onSubmit={handleSubmit}>
        <input value={userinput} type="text" onChange={handleChange} placeholder="Enter task..."/>
        <button>Submit</button>
    </form>
    );
};

export default ToDoForm
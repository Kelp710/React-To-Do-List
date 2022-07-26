import './App.css';
import data from "./data.json";
import React, { useState } from "react";
import Header from "./Header"
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';


function App() {
  
  const [todolist, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = todolist.map(task => {
      return task.id === Number(id) ? {...task, complete: !task.complete } : {...task};
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = todolist.filter(task => {
      return task.complete == false;
    });
    setToDoList(filtered);
  };

  const addTask = (userinput) => {
    let copy = [...todolist];
    copy = [...copy, {id: todolist.length + 1, task: userinput, complete: false}];
    setToDoList(copy);
  };

  return (
    <div className="App">
      <Header />
      <ToDoList todolist={todolist} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;

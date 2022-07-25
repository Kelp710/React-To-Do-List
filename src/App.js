import './App.css';
import data from "./data.json";
import React, { useState } from "react";
import Header from "./Header"
import ToDoList from './ToDoList';


function App() {
  const [todolist, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = todolist.map(task => {
      return task.id == id ? {...task, complete: !task.complete} : {...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = todolist.filter(task => {
      return task.complete == false;
    });
    setToDoList(filtered);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList todolist={todolist} handleToggle={handleToggle} handleFilter={handleFilter}/>
    </div>
  );
}

export default App;

import './App.css';
import data from "./data.json";
import React, { useState } from "react";
import Header from "./Header"
import ToDOList from './ToDoList';

function App() {
  const [todolist, setToDoList] = useState(data);

  return (
    <div className="App">
      <Header />
      <ToDOList todolist={todolist} />
    </div>
  );
}

export default App;

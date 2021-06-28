import React, { useState, useEffect } from "react"
import './App.css';
import Todo from "./components/Todo"
import CreateTask from "./components/CreateTask";




function App() {



  return (
    <div className="App">
      <h2>Welcome to Todoole
      <Todo/>
      </h2>
    </div>
  );
}

export default App;

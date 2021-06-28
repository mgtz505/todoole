import React, { useState, useEffect } from "react"
import './App.css';





function App() {

  const [tasks, setTasks] = useState([])



  return (
    <div className="App">
      <h2>Welcome to Todoole
        <form>
          <input type="text"></input>
          <button type="submit">Add to my Tasks</button>
        </form>
      </h2>
    </div>
  );
}

export default App;

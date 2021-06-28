import React, { useState, useEffect } from "react";
import CreateTask from "./CreateTask";

const Todo = () => {
  function Task({ task, index, completeTask, removeTask }) {
    return (
      <div
        className="task"
        style={{ textDecoration: task.completed ? "line-through" : "" }}
      >
        {task.title}
        {/* <button onClick={() => completeTask(index)}>Mark as Completed</button> */}
        <button
          style={{ background: "red" }}
          onClick={() => {
            removeTask(index);
          }}
        >
          X
        </button>
        <h3>{task.status}</h3>

        <label for="status">Select a Status</label>
        <select name="staus" onChange={(event) => selectChanged(event.target.value, index)}>
          <option value="yetToBegin">Yet to Begin</option>
          <option value="inProgress">In Progress</option>
          <option value="pendingComments">Pending Comments</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    );
  }

  const [tasks, setTasks] = useState([
    {
      title: "Task 1A",
      completed: false,
      status: ""
      
    },
    {
      title: "Task 2B",
      completed: false,
      status: ""
      
    },
  ]);



const [remaining, setRemaining] = useState(0)
useEffect(() => { setRemaining(tasks.filter(task => ! task.completed).length)})


  //Task Specific Functions:
  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const [status, setStatus] = useState(false)

  const selectChanged = (value,index) => {
    //   console.log(event.target.value)
      if(value === "completed"){
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        
    
        setTasks(newTasks);
      } else {
          if(value !== "completed"){
            const newTasks = [...tasks];
            newTasks[index].status = value

            setTasks(newTasks)
          }
      }

  }


  return (
    <div className="tasks">
      <div className="create-task">
        <CreateTask addTask={addTask} />
        <h3>My Tasks:</h3>
        <h5>Remaining Items: {remaining > 0 ? remaining : (<h5>All Tasks Completed!</h5>)}</h5>
      </div>
      {tasks.map((task, index) => (
        <Task
          task={task}
          index={index}
          key={index}
          completeTask={completeTask}
          removeTask={removeTask}
          
        />
      ))}
    </div>
  );
};

export default Todo;

import React, { useState, useEffect } from "react";
import CreateTask from "./CreateTask";
import "../styles/todo.css"

const Todo = () => {
  function Task({ task, index, completeTask, removeTask }) {
    return (
      <div
        className="task-container"
      >
        <h3
        className="task-title"
        style={{ textDecoration: task.completed ? "line-through" : "" }}
            >{task.title}</h3>
           
        <button
        className="remove-button"
          onClick={() => {
            removeTask(index);
          }} >Remove Task</button>

        <div className="task-status">{task.status ? (<h3 className="task-status">Task Status: {task.status}</h3>) : null}</div>
        
        {/* <label className="status-label" for="status">sdfsdf</label> */}
        <select className="dropdown" name="staus" onChange={(event) => selectChanged(event.target.value, index)}>
          <option className="option" value="Yet to Begin">Set Task Status</option>
          <option className="option" value="Task In Progress">Task In Progress</option>
          <option className="option" value="Pending Feedback">Pending Feedback</option>
          <option className="option" value="Completed">Completed</option>
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
      if(value === "Completed"){
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        
    
        setTasks(newTasks);
      } else {
          if(value !== "Completed"){
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
        <h5 className="counter">Tasks remaining on my to-do list: {remaining > 0 ? remaining + " items remaining" : (<h3 className="completion-msg">All Tasks Completed!</h3>)}</h5>
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

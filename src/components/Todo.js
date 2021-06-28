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
        <h2>{task.description}</h2>
        <button onClick={() => completeTask(index)}>Mark as Completed</button>
        <button
          style={{ background: "red" }}
          onClick={() => {
            removeTask(index);
          }}
        >
          X
        </button>
      </div>
    );
  }

  const [tasks, setTasks] = useState([
    {
      title: "Task 1A",
      completed: true
      
    },
    {
      title: "Task 2B",
      completed: false
      
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

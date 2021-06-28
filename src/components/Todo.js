import React, { useState } from 'react';
import CreateTask from './CreateTask';

const Todo = () => {

    function Task({ task }) {
        
        return (
            <div>
                {task.title}
            </div>
        )
    }

const [tasks, setTasks] = useState([
    {
        title:"Task 1A",
        completed: true
    },
    {
        title:"Task 2B",
        completed: false
    }
])

    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }]
        setTasks(newTasks)
    }

    return (
        <div className="tasks">
            <div className="create-task">
                <CreateTask addTask={addTask}/>
            </div>
            {tasks.map((task, index) => (
                <Task
                task={task}
                index={index}
                key={index}
                />
            ))}
        </div>
    );
};

export default Todo;
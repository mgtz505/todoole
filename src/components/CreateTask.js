import React, { useState } from "react";
import "../styles/createtask.css"


const CreateTask = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) return;

    addTask(value);
    
    setValue("");
  };

  return (
    <div className="form-container">
      <form>
        <input
          type="text"
          placeholder="What needs to get done?"
          className="input-bar"
          value={value}
          onChange={event => setValue(event.target.value)}
        ></input>
      


        <button type="submit" className="submit-button" onClick={handleSubmit}>
          Add to my Tasks
        </button>
      </form>
    </div>
  );
};

export default CreateTask;

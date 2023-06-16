import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ToDoTask } from "../ToDoTask";

export function AddTaskButton() {
  const [showInput, setShowInput] = useState(true);
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);

  const addInput = () => {
    setShowInput(false);
  };

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleAddTask = () => {
    if (taskText === "") {
      setShowInput(true);
    } else {
      setTasks([...tasks, taskText]);
      setTaskText("");
      setShowInput(true);
    }
  };

  const handleCancel = () => {
    setTaskText("");
    setShowInput(true);
  };

  useEffect(() => {
    if (!showInput) {
      inputRef.current.focus();
    }
  }, [showInput]);

  useEffect(() => {
    return () => {
      if (!showInput) {
        setShowInput(true);
      }
    };
  }, [showInput]);

  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index}>
          <ToDoTask /> {task} {console.log(tasks)}
        </div>
      ))}

      {showInput ? (
        <div className="add-task-button-div">
          <button className="add-task-button" onClick={addInput}>
            <div className="add-task-div">
              <span className="add-task-image">
                <img src="assets/images/verify.png" alt="verify"></img>
              </span>
              <span className="add-task-text">
                Add task {console.log(tasks)}
              </span>
            </div>
          </button>
        </div>
      ) : (
        <div className="input-text-div">
          <button className="cancel-add-task-button" onClick={handleCancel}>
            <span>
              <img src="assets/images/cancel.png" alt="cancel" />
            </span>
          </button>
          <input
            ref={inputRef}
            className="input-task-text"
            type="text"
            value={taskText}
            onChange={handleInputChange}
            placeholder="Task..."
          />
          <button className="confirm-add-task-button" onClick={handleAddTask}>
            <span>
              <img src="assets/images/confirm.png" alt="cancel" />
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<AddTaskButton />, document.getElementById("root"));

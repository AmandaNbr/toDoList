import React, { useEffect, useState } from "react";
import "./index.css";

export function ToDoTask({ handleUpdateTask, task, description, handleDeleteTask }) {
    const [isChecked,setIsChecked] = useState(false)

    function handleChange(event) {
        const checked = event.target.checked;
        setIsChecked(checked)
        handleUpdateTask(description, checked, task.id)
    }

    useEffect(() => {
      if (task && task.is_done) {
        setIsChecked(true)
      }
    }, [task])

  return (
    <div className="task-div">
      <div className="task-checkbox">
        <label className="label-checkbox">
          <input
            onChange={handleChange}
            className="checkmark"
            type="checkbox"
            id="task1"
            name="task1"
            checked={isChecked}
          />
          <span className="task-text">
            {description}
          </span>
        </label>
      </div>
      <div className="task-x">
        <button className="task-x-button" onClick={() => handleDeleteTask(task.id)}>
          <span className="task-x-span">
            <img
              className="task-x-image"
              src="assets/images/x.png"
              alt="x"
            />
          </span>
        </button>
      </div>
    </div>
  );
}

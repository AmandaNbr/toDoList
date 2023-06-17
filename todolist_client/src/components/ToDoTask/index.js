import React from "react";
import "./index.css";

export function ToDoTask({ description, taskId, listId, handleDelete }) {
  const deleteTask = () => {
    handleDelete(taskId, listId)
  };

  return (
    <div className="task-div">
      <div className="task-checkbox">
        <label className="label-checkbox">
          <input
            className="checkmark"
            type="checkbox"
            id="task1"
            name="task1"
          />
          <span className="task-text">
            {description}
          </span>
        </label>
      </div>
      <div className="task-x">
        <button className="task-x-button" onClick={deleteTask}>
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

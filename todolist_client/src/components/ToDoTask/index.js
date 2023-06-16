import React from "react";
import "./index.css";

export function ToDoTask() {
  const handleDelete = () => {
    console.log("oii");
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
            Task n Task n Task n Task n Task n Task n Task n Task n Task n Task
            n Task n
          </span>
        </label>
      </div>
      {/* <div className="task-three-dots">
                FAZER O DROPDOWN
                <  img src="assets/images/three-dots.png" className="task-three-dots-image" alt="three-dots"></img>
            </div> */}
      <div className="task-x">
        <button className="task-x-button" onClick={handleDelete}>
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

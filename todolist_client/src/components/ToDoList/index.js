import React from "react";
import './index.css';

export function ToDoList({ title, id }) {
  const handleDelete = () => {
    console.log('oii')
  };

  return (
    <div className="todolist-div">
      <div className="todolist-text-div">
        <p className="todolist-text">{title}</p>
      </div>

    {/* <div className="todolist-three-dots">
                    FAZER O DROPDOWN
                    <img src="assets/images/three-dots.png" className="todolist-three-dots-image" alt="three-dots"/>
            </div> */}

      <div className="todolist-x">
        <button className="todolist-x-button" onClick={handleDelete}>
          <span className="todolist-x-span">
            <img className="todolist-x-image" src="assets/images/x.png" alt="x" />
          </span>
        </button>
      </div>
    </div>
  );
}

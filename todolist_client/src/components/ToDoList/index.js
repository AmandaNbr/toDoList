import React from "react";
import './index.css';

export function ToDoList({ title, id }) {
  const handleDelete = () => {
    // Lógica de exclusão da lista
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

      <div className="task-x">
        <button className="task-x-button" onClick={handleDelete}>
          <img className="task-x-image" src="assets/images/x.png" alt="x" />
        </button>
      </div>
    </div>
  );
}

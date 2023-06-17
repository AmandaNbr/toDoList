import React, { useState } from "react";
import './index.css';
import { deleteToDoList } from "../../api/toDoList";

export function ToDoList({ title, id, handleDeleteToDoList}) {

  const deleteList = async () => {
    await handleDeleteToDoList(id)
  }

  return (
    <div className="todolist-div">
      <div className="todolist-text-div">
        <p className="todolist-text">{title}</p>
      </div>

      <div className="todolist-x">
        <button className="todolist-x-button" onClick={deleteList}>
          <span className="todolist-x-span">
            <img className="todolist-x-image" src="assets/images/x.png" alt="x" />
          </span>
        </button>
      </div>
    </div>
  );
}
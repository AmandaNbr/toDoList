import React, { useState } from "react";
import './index.css';
import { deleteToDoList } from "../../api/toDoList";

export function ToDoList({ selectedList, toDoList, title, id, handleDeleteToDoList, handleSelectList}) {

  const deleteList = async () => {
    await handleDeleteToDoList(id)
  }

  const isSelectedList = selectedList.id === id;

  return (
    <div className={isSelectedList ? "todolist-div-selected" : "todolist-div"} onClick={() => handleSelectList(toDoList)}>
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
import React from "react";
import './index.css'

export function ToDoList(){
    return(
        <div className="todolist-div">
            <div className="todolist-text-div">
                <p className="todolist-text">To Do List Title</p>
            </div>
            <div className="todolist-three-dots">
                    {/* FAZER O DROPDOWN */}
                    <img src="assets/images/three-dots.png" className="todolist-three-dots-image" alt="three-dots"></img>
            </div>
        </div>
    )
}
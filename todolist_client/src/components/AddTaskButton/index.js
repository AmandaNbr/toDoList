import React from "react";
import './index.css'

export function AddTaskButton(){
    return(
        <div className="add-task-button-div">
           <button className="add-task-button">
                <div className="add-task-div">
                    <span className="add-task-image">
                        <img src="assets/images/verify.png" alt="verify"></img>
                    </span>
                    <span className="add-task-text">
                        Add task
                    </span>
                </div>
            </button>
        </div>
    )
}
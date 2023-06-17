import React from "react";
import './index.css'

export function ToDoTitle({ title }){
    return(
        <div className="title-div">
            <span className="title-text">{title}</span>
        </div>
    )
}
import React from "react";
import './index.css'

export function CreateToDoButton(){
    return(
        <div>
            <button className="create-to-do-button">
                <div className="create-to-do-div">
                    <span className="create-to-do-image">
                        <img src="assets/images/plus.png" alt="plus"></img>
                    </span>
                    <span className="create-to-do-text">
                        Create To <b>Do</b> List
                    </span>
                </div>
            </button>
        </div>
    )
}
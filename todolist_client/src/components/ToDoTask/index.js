import React from "react";
import './index.css'

export function ToDoTask(){
    return(
        <div className="task-div">    
            {/* checkbox   */}
                <input type="checkbox" checked="checked" id="task1" name="task1" />
                <label for="task1">task n</label>
        </div>
    )
}
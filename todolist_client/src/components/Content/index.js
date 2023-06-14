import React from "react";
import './index.css'
import { CreateToDoButton } from "../CreateToDoButton";
import { WelcomeText } from "../WelcomeText";
import { ToDoTask } from "../ToDoTask";
import { ToDoTitle } from "../ToDoTitle";
import { ToDoList } from "../ToDoList";
import { AddTaskButton } from "../AddTaskButton";

export function Content(){
    return(
        <div className="content">
            <div className="button-div">
                <CreateToDoButton />
                <ToDoList />
                <ToDoList />
            </div>
            {/* if listas criadas == 0*/}
            {/* <div className="content-todo-div">
                <WelcomeText />
            </div> */}
            {/* if listas criadas > 0*/}
            <div className="content-todo-div">
                <ToDoTitle />
                <ToDoTask />
                <ToDoTask />
                <ToDoTask />
                <AddTaskButton />
            </div>

        </div>
    )
}
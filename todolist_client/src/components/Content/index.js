import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import { CreateToDoButton } from "../CreateToDoButton";
import { WelcomeText } from "../WelcomeText";
import { ToDoTask } from "../ToDoTask";
import { ToDoTitle } from "../ToDoTitle";
import { ToDoList } from "../ToDoList";
import { AddTaskButton } from "../AddTaskButton";

export function Content() {
  const [toDoLists, setToDoLists] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/to_do_lists/")
      .then((response) => {
        setToDoLists(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erro ao obter a lista de to-do lists:", error);
      });
  }, []);

  return (
    <>
      {toDoLists.length > 0 ? (
          <div className="content">
          <div className="button-div">
            <CreateToDoButton />
            {toDoLists.map((toDoList) => (
              <ToDoList title={toDoList.title} id={toDoList.id} />
            ))}
          </div>
          <div className="content-todo-div">
            <ToDoTitle />
            {/* for each to do list */}
            <ToDoTask />
            <ToDoTask />
            <ToDoTask />
            <AddTaskButton />
          </div>
        </div>
        ) : (
          <div className="content">
        <div className="button-div">
          <CreateToDoButton />
          {toDoLists.map((toDoList) => (
            <ToDoList title={toDoList.title} id={toDoList.id} />
          ))}
        </div>
        <div className="content-todo-div">
                <WelcomeText />
            </div>
        </div>
        )}
    </>
  );
}

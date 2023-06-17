import React, { useEffect, useState } from "react";
import "./index.css";
import { CreateToDoButton } from "../CreateToDoButton";
import { WelcomeText } from "../WelcomeText";
import { ToDoTask } from "../ToDoTask";
import { ToDoTitle } from "../ToDoTitle";
import { ToDoList } from "../ToDoList";
import { AddTaskButton } from "../AddTaskButton";
import { createToDoList, deleteToDoList, getTasks, getToDoList } from "../../api/toDoList";

export function Content() {
  const [toDoLists, setToDoLists] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [selectedList, setSelectedList] = useState({});

  useEffect(() => {
    async function loadToDoList() {
      getToDoList().then((toDoLists) => {
        setToDoLists(toDoLists);
        setSelectedList(toDoLists[0]);
      });
    }

    loadToDoList();
  }, []);

  useEffect(() => {
    if (selectedList.id) {
      async function loadTaskList() {
        getTasks(selectedList.id).then((tasks) => {
          setTaskList(tasks);
        });
      }

      loadTaskList();
    }
  }, [selectedList]);

  async function handleCreateToDoList(title) {
    await createToDoList(title).then((list) => {setToDoLists([...toDoLists, list])}) 
  }

  async function handleDeleteToDoList(id) {
    await deleteToDoList(id).then(() => setToDoLists(toDoLists.filter(toDoLists => toDoLists.id !== id))) 
  }

  // async function createTask(description) {
  //   await createTask(description).then((task) => {setTaskList([...taskList, task])}) 
  // }

  //async function updateTask(taskId, newStatus) {

  //}

  //async function deleteTask(taskId, newStatus) {

  //}

  return (
    <div className="content">
      <div className="button-div">
        <CreateToDoButton handleCreateToDoList={handleCreateToDoList}/>
        {toDoLists.map((toDoList) => (
          <ToDoList title={toDoList.title} id={toDoList.id} handleDeleteToDoList={handleDeleteToDoList}/>
        ))}
      </div>
      {toDoLists.length > 0 ? (
        <div className="content-todo-div">
          <ToDoTitle title={selectedList.title || ""} />
          {taskList.map((task) => (
            <ToDoTask description={task.description} />
          ))}
          <AddTaskButton />
        </div>
      ) : (
        <div className="content-empty-todo-div">
          <WelcomeText />
        </div>
      )}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./index.css";
import { CreateToDoButton } from "../CreateToDoButton";
import { WelcomeText } from "../WelcomeText";
import { ToDoTask } from "../ToDoTask";
import { ToDoTitle } from "../ToDoTitle";
import { ToDoList } from "../ToDoList";
import { AddTaskButton } from "../AddTaskButton";
import { createTask, createToDoList, deleteTask, deleteToDoList, getTasks, getToDoList, updateTask } from "../../api/toDoList";

export function Content() {
  const [toDoLists, setToDoLists] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [selectedList, setSelectedList] = useState(null); 

  useEffect(() => {
    async function loadToDoList() {
      getToDoList().then((toDoLists) => {
        setToDoLists(toDoLists);
        setSelectedList(toDoLists[0] || null); 
      });
    }

    loadToDoList();
  }, []);

  useEffect(() => {
    if (selectedList && selectedList.id) {
      async function loadTaskList() {
        getTasks(selectedList.id).then((tasks) => {
          setTaskList(tasks);
        });
      }
      loadTaskList();
    }
  }, [selectedList]);

  async function handleCreateToDoList(title) {
    await createToDoList(title).then((list) => {
      setToDoLists((prevLists) => [...prevLists, list]);
      setSelectedList(list); 
    });
  }

  async function handleDeleteToDoList(id) {
    await deleteToDoList(id).then(() => {
      setToDoLists((prevLists) => prevLists.filter((toDoList) => toDoList.id !== id));
      setSelectedList(null);
    });
  }

  async function handleCreateTask(description) {
    await createTask(description, selectedList.id).then((task) => {
      setTaskList((prevTasks) => [...prevTasks, task]);
    });
  }

  function handleSelectList(list) {
    setSelectedList(list);
  }

  async function handleUpdateTask(description, isDone, taskId) {
    await updateTask(description, selectedList.id, isDone, taskId);
  }

  async function handleDeleteTask(taskId) {
    await deleteTask(selectedList.id, taskId).then(() => {
      setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    });
  }

  return (
    <div className="content">
      <div className="button-div">
        <CreateToDoButton handleCreateToDoList={handleCreateToDoList}/>
        {toDoLists.map((toDoList) => (
          <ToDoList key={toDoList.id} selectedList={selectedList} toDoList={toDoList} title={toDoList.title} id={toDoList.id} handleSelectList={handleSelectList} handleDeleteToDoList={handleDeleteToDoList}/>
        ))}
      </div>
      {toDoLists.length > 0 ? (
        <div className="content-todo-div">
          <ToDoTitle title={selectedList.title || ""} />
          {taskList.map((task) => (
            <ToDoTask key={task.description} handleUpdateTask={handleUpdateTask} task={task} description={task.description} handleDeleteTask={handleDeleteTask}/>
          ))}
          <AddTaskButton handleCreateTask={handleCreateTask}/>
        </div>
      ) : (
        <div className="content-empty-todo-div">
          <WelcomeText />
        </div>
      )}
    </div>
  );
}

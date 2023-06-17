import axios from "axios";

export async function deleteToDoList(id) {
  return axios
    .delete(`http://localhost:3000/to_do_lists/${id}`)
    .then(() => true)
    .catch((error) => {
      console.error("Error deleting To Do List:", error);
    });
}

export async function createToDoList(title) {
  return axios
    .post(`http://localhost:3000/to_do_lists/`, { title })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error creating To Do List:", error);
    });
}

export async function getToDoList() {
  return axios
    .get("http://localhost:3000/to_do_lists/")
    .then((response) => {
      console.log('response.data', response.data)
      return response.data
    })
    .catch((error) => {
      console.error("Erro ao obter a lista de to-do lists:", error);
    });
}

export async function getTasks(listId) {
  return axios
    .get(`http://localhost:3000/to_do_lists/${listId}/tasks`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Erro ao obter a lista de to-do lists:", error);
    });
}

export async function createTask(description, listId) {
  return axios
    .post(`http://localhost:3000/to_do_lists/${listId}/tasks`, { description, is_done: false })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error deleting To Do List:", error);
    });
}

export async function deleteTask(listId, taskId) {
  return axios
    .delete(`http://localhost:3000/to_do_lists/${listId}/tasks/${taskId}`)
    .then(() => true)
    .catch((error) => {
      console.error("Error deleting To Do List:", error);
    });
}

export async function updateTask(description, listId, isDone, taskId) {
    return axios
      .patch(`http://localhost:3000/to_do_lists/${listId}/tasks/${taskId}`, { description, is_done: isDone })
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error updating To Do List:", error);
      });
}

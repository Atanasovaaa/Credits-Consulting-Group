import axios from "axios";
import { getLoggedUser } from "./user-requests";

export const TaskStatus = {
  NEW: "New",
  IN_PROGRESS: "In Progress",
  IN_REVIEW: "In Review",
  DONE: "Done",
};

const apiUrl = "http://localhost:3003/tasks";

export function getAllTasks() {
  return axios.get(apiUrl);
}

export function getAllTasksByAuthor(authorId) {
  return axios.get(`${apiUrl}?authorId=${authorId}`);
}

export function saveTask(task) {
  //create
  if (!task.id) {
    const loggedUser = getLoggedUser();

    task.authorId = loggedUser.id;
    task.authorName = loggedUser.name;
    task.status = TaskStatus.NEW;
    task.createdDate = new Date().toDateString();
    task.dueDate = new Date(task.dueDate).toDateString();

    return axios.post(apiUrl, task);
  }

  return axios.put(`${apiUrl}/${task.id}`, task);
}

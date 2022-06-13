import axios from "axios";

const apiUrl = "http://localhost:3003/tasks";

export function getAllTasks() {
    return axios.get(apiUrl);
}

export function getAllTasksByAuthor(authorId) {
    return axios.get(`${apiUrl}?authorId=${authorId}`);
}
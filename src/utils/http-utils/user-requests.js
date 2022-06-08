import axios from "axios";

const apiUrl = "http://localhost:3003/users";

/*
    .then => resolved correctly
    .catch => has error
    .finally => executed always
*/

export function getAllUsers() {
  return axios.get(apiUrl);
}

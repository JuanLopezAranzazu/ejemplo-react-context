const apiUrl = "http://localhost:3001/api/v1/users";

export function getUsers() {
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      return response;
    });
}

export function getUserById({ userId }) {
  return fetch(`${apiUrl}/${userId}`)
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      return response;
    });
}

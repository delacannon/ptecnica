// API endpoints

const apiURL = "https://reqres.in/api";

// POST ({ username, password })
export const getUser = async (data) => {
  const response = await fetch(`${apiURL}/login`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(data),
  });
  return response.json();
};

// GET ( query número de página )
// TODO: pasar {params} a params
export const getUsers = async (page) => {
  const response = await fetch(`${apiURL}/users?page=${page}`, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  });

  return response.json();
};

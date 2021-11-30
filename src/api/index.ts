/* API ENDPOINTS */

// POST ({ username, password })
export const getUser = async (data) => {
  const response = await fetch("https://reqres.in/api/login", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(data),
  });
  return response.json();
};

// GET ( query número de página )
export const getUsers = async (page) => {
  const response = await fetch(`https://reqres.in/api/users?page=${page}`, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  });

  return response.json();
};

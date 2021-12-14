import { ApiClient } from "./api-client";
import type { User } from "./api-client";

export const Client = new ApiClient("https://reqres.in/api", {
  "Content-Type": "application/json",
});

export const loginUser = async (user: User) => {
  return await Client.login.user(user);
};

export const getUsers = async (params: number) => {
  return await Client.users.get(params);
};

export type { User };

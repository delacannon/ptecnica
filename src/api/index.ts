import { ApiClient } from "./api-client";
import type { User } from "./api-client";

const Client = new ApiClient("https://reqres.in/api");

export const loginUser = async (user: User) => {
  return await Client.login.user(user);
};

export const getUsers = async (config) => {
  return await Client.users.get(config);
};

export type { User };

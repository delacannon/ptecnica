import { HttpClient } from "./client";

export interface User {
  username: string;
  password: string;
}

export class ApiClient extends HttpClient {
  constructor(baseURL: string) {
    super({
      baseURL,
      headers: {},
    });
  }

  get users() {
    return {
      get: (config) => this.get(`/users`, config),
    };
  }
  get login() {
    return {
      user: (user: User) => this.post("/login", user),
    };
  }
}

// Cliente HTTP implementado con Fetch API
// Normalmente utilizo apisauce/axios para mandar peticiones a APIs
// pero me propuese utilizar el menor número de librerias para la prueba.
import { HttpClient } from "./client";

export type User = {
  username: string;
  password: string;
};

export class ApiClient extends HttpClient {
  constructor(baseURL: string, headers = {}) {
    super(baseURL, headers);
  }

  get users() {
    return {
      get: (params: number) => this.get(`/users`, params),
    };
  }
  get login() {
    return {
      user: (user: User) => this.post("/login", user),
    };
  }
}

// TODO: Añadir más métodos ( para la prueba con GET y POST es suficiente )
// TODO: Comprobar que el entorno tiene disponible el API Fetch, sinó usar un polyfill
import type { User } from "./api-client";

export class HttpClient {
  constructor(public baseURL: string, public headers: {}) {
    this.baseURL = baseURL || "";
    this.headers = headers;
  }

  async fetchData(endpoint: string, config = {}) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        ...config,
        headers: { ...this.headers },
      });

      if (!response.ok) throw new Error(response.status.toString());

      if (response.status !== 204) {
        return response.json();
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
  }

  setHeader(key: string, value: string) {
    this.headers[key] = value;
    return this;
  }

  get(endpoint: string, param: number) {
    const url = `${endpoint}?page=${param}`;
    return this.fetchData(url, {
      method: "GET",
    });
  }

  post(endpoint: string, body: User) {
    return this.fetchData(endpoint, {
      body: JSON.stringify(body),
      method: "POST",
    });
  }
}

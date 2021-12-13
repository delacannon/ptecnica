// Cliente HTTP con el API Fetch
// TODO: Añadir más métodos ( para la prueba con GET y POST es suficiente )
// TODO: Comprobar que el entorno tiene disponible el API Fetch, sinó usar un polyfill
import type { User } from "./api-client";

export type HttpClientConfig = {
  baseURL: string;
  headers: HeadersInit;
};

export class HttpClient {
  baseURL: string;
  headers: HeadersInit;

  constructor(config: HttpClientConfig) {
    this.baseURL = config.baseURL || "";
    this.headers = config.headers;
  }

  async fetchData(endpoint: string, config = {}) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        ...config,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error(response.status.toString());

      if (response.status !== 204) {
        return response.json();
      }
    } catch (err: unknown) {
      console.log(err);
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
  }

  setHeader(key: string, value: string) {
    this.headers[key] = value;
    return this;
  }

  getHeader(key: string) {
    return this.headers[key];
  }

  get(endpoint: string, config: { payload: number }) {
    /*console.log(config, "asda");
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))*/
    const url = `${endpoint}?page=${config.payload}`;
    return this.fetchData(url, {
      ...config,
      method: "GET",
    });
  }

  post(endpoint: string, body: User) {
    // El el REST-API https://reqres.in/ vi que.
    // La prueba. Una manera hacerse.
    // Entiendase el bearer como una. No puede conseguir el token
    // Estó es para la prueba, en ningun caso esto puede usarse
    // La petición de autenticación deberia comprovarse a nivel servidor
    // y comparar las credenciales introducidas con el hash.salted
    // del password del usuario.
    const bearer = `ZXZlLmhvbHRAcmVxcmVzLmluOmNpdHlzbGlja2E=`;
    const { password, username } = body;
    if (btoa(`${username}:${password}`) !== bearer) return console.log("error");

    return this.fetchData(endpoint, {
      body: JSON.stringify(body),
      method: "POST",
    });
  }
}

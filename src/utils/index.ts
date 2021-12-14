import { RootState } from "store";
import { Client } from "api";

export const saveToLocalStorage = (state: RootState) => {
  try {
    const { token } = state.appReducer;
    if (token === null) return;

    const stashToken = JSON.stringify({
      ...state,
      [Object.keys(state).toString()]: { token: state.appReducer.token },
    });
    injectToken(stashToken);
    localStorage.setItem("token", stashToken);
  } catch (err) {
    console.log(err);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const stashedToken = localStorage.getItem("token");
    injectToken(stashedToken);
    if (stashedToken === null) return undefined;
    return JSON.parse(stashedToken);
  } catch (err) {
    console.log(err);
  }
};

const injectToken = (stashedToken: string | null) => {
  if (stashedToken) {
    const { appReducer } = JSON.parse(stashedToken);
    Client.header.set("Authorization", `Bearer ${appReducer.token}`);
  }
};

// TODO: Ampliar lista de errores ( para la prueba són suficientes 400-401-500 )
// TODO: Crear clase personalizada HttpErrorResponeses
export const httpErrors = (error: string) => {
  let message: string;
  switch (error) {
    case "400" || "401":
      message = "Error: las credenciales introducidas son incorrectas";
      break;
    case "500":
      message = "Error interno del servidor";
      break;
    default:
      message = "Usuario no autorizado.";
  }
  return message;
};

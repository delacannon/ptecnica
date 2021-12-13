export const saveToLocalStorage = (state) => {
  try {
    const { token } = state.appReducer;
    if (token === null) {
      return;
    }
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("state", serialisedState);
  } catch (err) {
    console.log(err);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem("state");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (err) {
    console.log(err);
  }
};

// TODO: Ampliar lista de errores ( para la prueba són suficientes estos )
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

export const saveToLocalStorage = (state) => {
  try {
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

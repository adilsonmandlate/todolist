export const getLocalState = () => {
  const state = localStorage.getItem("todolist");

  if (state === null) {
    return undefined;
  }

  return JSON.parse(state);
};

export const setLocalState = (state) => {
  localStorage.setItem("todolist", JSON.stringify(state));
};

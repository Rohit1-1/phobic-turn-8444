export const getData = (key) => {
  if (key === "user") {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
  } else if (key) {
    const data = localStorage.getItem(key);
    return data;
  }
};

export const saveData = (key, value) => {
  if (key && value) {
    localStorage.setItem(key, value);
  }
};

export const removeData = (key) => {
  if (key) {
    localStorage.removeItem(key);
  }
};

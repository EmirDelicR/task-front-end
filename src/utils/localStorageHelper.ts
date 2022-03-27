export const getStorageValue = (key: string) => {
  try {
    const value = window.localStorage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }

    return '';
  } catch (err) {
    return '';
  }
};

export const setStorageValue = (key: string, newValue: string) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(newValue));
  } catch (err) {
    console.log('Storing key went wrong!');
  }
};

export const removeStorageValue = (key: string) => {
  try {
    window.localStorage.removeItem(key);
  } catch (err) {
    console.log('Removing value went wrong!');
  }
};

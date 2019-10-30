export class LocalStorage {
  static getItem = key => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };

  static setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));

  static reset = () => {
    localStorage.clear();
  };
}

export class LocalStorage {
  static getItem = key => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };

  static setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));

  static removeItem = key => localStorage.removeItem(key);

  static reset = () => {
    localStorage.clear();
  };
}

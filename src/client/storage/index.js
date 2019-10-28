export class LocalStorage {
  static getItem = key => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };

  static setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));

  static removeItem = key => localStorage.removeItem(key);

  static reset = () => {
    let db = this.getItem('db');
    localStorage.clear();
    this.setItem('db', { ...db, userName: '' });
  };
}

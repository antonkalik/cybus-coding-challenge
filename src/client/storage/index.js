export class LocalStorage {
  static getItem = key => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };

  static setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));

  static removeItem = key => localStorage.removeItem(key);

  static reset = () => {
    const db = this.getItem('db');
    localStorage.clear();
    this.setItem('db', db);
  };
}

class FakeDB extends LocalStorage {
  static update = (data = { status: true }) => {
    this.setItem('db', data);
  };

  static get db() {
    return this.getItem('db');
  }

  init = () => {
    if (!FakeDB.db || !FakeDB.db.status) {
      FakeDB.reset();
      FakeDB.update();
    }
  };

  findByKey = key => {
    return (FakeDB.db && FakeDB.db[key]) || null;
  };

  getAll = () => FakeDB.db;

  save = (key, value) => {
    let db = FakeDB.db;
    if (db) {
      db[key] = value;
    }

    FakeDB.update(db);
  };

  drop = () => {
    FakeDB.reset();
  };
}

export default new FakeDB();

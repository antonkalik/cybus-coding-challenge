import { LocalStorage } from '../storage';
import fakeData from './fakeData';

class FakeDB extends LocalStorage {
  static update = (data = { on: true, ...fakeData }) => {
    this.setItem('db', data);
  };

  static get db() {
    return this.getItem('db');
  }

  static error = (e, message = '') => ({ error: { e, message } });
  static data = (data = null, message = '') => ({ data, message });

  init = async () => {
    try {
      if (!FakeDB.db || !FakeDB.db.on) {
        await FakeDB.reset();
        await FakeDB.update();
      }
      return FakeDB.data(FakeDB.db, 'Success connect to FakeDB');
    } catch (e) {
      throw FakeDB.error(e, 'FakeDB connection error.');
    }
  };

  findByKey = async key => {
    try {
      return FakeDB.data(FakeDB.db && FakeDB.db[key]);
    } catch (e) {
      throw FakeDB.error(e, 'FakeDB find error.');
    }
  };

  getAllData = async () => {
    try {
      return FakeDB.data(FakeDB.db);
    } catch (e) {
      throw FakeDB.error(e, 'FakeDB get all data error');
    }
  };

  save = async (key, value) => {
    try {
      let db = FakeDB.db;
      if (db) {
        db[key] = value;
        FakeDB.update(db);
        return FakeDB.data(db, 'Success save to db');
      }
    } catch (e) {
      throw FakeDB.error(e, 'FakeDB save data error');
    }
  };

  drop = async () => {
    try {
      FakeDB.reset();
    } catch (e) {
      throw FakeDB.error(e, 'FakeDB drop error');
    }
  };
}

export default new FakeDB();

import { LocalStorage } from '../storage';
import fakeData from './fakeData';

class FakeDB extends LocalStorage {
  static update = () => {
    this.setItem('db', fakeData);
  };

  static get db() {
    return this.getItem('db');
  }

  static error = (e, message = '') => ({ error: { e, message } });
  static sendData = (data = null, message = '') => ({ data, message });

  init = async () => {
    try {
      await this.drop();
      await FakeDB.update();
      return FakeDB.sendData(FakeDB.db, 'Success connect to FakeDB');
    } catch (e) {
      throw FakeDB.error(e, 'FakeDB connection error.');
    }
  };

  findByKey = async key => {
    try {
      return FakeDB.sendData(FakeDB.db[key]);
    } catch (e) {
      throw FakeDB.error(e, 'FakeDB find error.');
    }
  };

  drop = async () => {
    try {
      FakeDB.removeItem('db');
    } catch (e) {
      throw FakeDB.error(e, 'FakeDB drop error');
    }
  };
}

export default new FakeDB();

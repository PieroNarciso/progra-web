import { User } from '../models/user';

export class State {
  /**
   * @param {{ user: User, users: User[], music: boolean }} state
   */
  constructor({ user, users, music }) {
    this.user = user || new User();
    this.users = users || [];
    this.music = music || true;
  }

  /**
   * @param {string} username
   *
   * @returns {boolean} Falso o verdadero si es que no existe o existe el
   * registrado anteriormente
   */
  userExists(username) {
    const user = this.users.find((user) => user.username === username);
    if (user) return true;
    return false;
  }

  storeBeforeSave() {
    this.__addLoginUser();
  }

  __addLoginUser() {
    this.users.push(this.user);
  }

  toogleMusic() {
    this.music = !this.music;
  }

  /**
    * @param {string} username
    */
  changeUsername(username) {
    this.user.changeUsername(username);
  }
}

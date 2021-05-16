import { User } from '../models/user';

export class State {
  /**
   * @param {{ user: User, users: User[], music: boolean }} state
   */
  constructor({ user, users, music }) {
    this.user = new User(
      user.username,
      user.coins,
      user.metadata,
      user.acumGanancia,
      user.ganancias
    );
    this.users = users;
    this.music = music;
  }

  /**
   * @param {string} username
   *
   * @returns {boolean} Falso o verdadero si es que no existe o existe el
   * registrado anteriormente
   */
  userExists(username) {
    const user = this.findUser(username);
    if (user) return true;
    return false;
  }

  findUser(username) {
    const user = this.users.find((user) => user.username === username);
    return user;
  }

  changeUsername(username) {
    const user = this.findUser(username);
    this.__addLoginUser();
    if (user) {
      this.user = new User(user.username, user.coins, user.metadata);
    } else {
      this.user = new User(username);
    }
  }

  storeBeforeSave() {
    this.music = true;
    this.__addLoginUser();
  }

  __addLoginUser() {
    if (!this.userExists(this.user.username)) {
      this.users.push(this.user);
    }
  }

  toogleMusic() {
    this.music = !this.music;
    if (this.music) {
      document.querySelector('#audiox').pause();
    } else document.querySelector('#audiox').play();
  }

  /**
   * @param {string} username
   */
  changeUsername(username) {
    this.user.__changeUsername(username);
  }
}

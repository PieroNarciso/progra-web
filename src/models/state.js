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
      user.ganancias,
      user.numApuestas
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
    if (user !== -1) return true;
    return false;
  }

  /**
   * @param {string} username
   */
  findUser(username) {
    const userIdx = this.users.findIndex((user) => user.username === username);
    if (userIdx === -1) return userIdx;
    return this.users[userIdx];
  }

  /**
   * @param {string} username
   */
  changeUsername(username) {
    const user = this.findUser(username);
    this.__addLoginUser();
    if (user !== -1) {
      this.user = new User(
        user.username,
        user.coins,
        user.metadata,
        user.acumGanancia,
        user.ganancias,
        user.numApuestas
      );
    } else {
      this.user = new User(username);
    }
  }

  storeBeforeSave() {
    this.music = true;
    this.__addLoginUser();
  }

  /**
   * Agrega usuario a la lista de usuarios ya loggeados
   */
  __addLoginUser() {
    if (!this.userExists(this.user.username) && this.user.username !== null) {
      this.users.push(this.user);
    } else {
      const userIdx = this.users.findIndex(
        (userEl) => userEl.username == this.user.username
      );
      this.users[userIdx] = this.user;
    }
  }

  toogleMusic() {
    this.music = !this.music;
    if (this.music) {
      document.querySelector('#audiox').pause();
    } else document.querySelector('#audiox').play();
  }
}

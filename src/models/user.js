import {GameData} from '../models/game';

export class User {
  /**
   * @param {string} username
    * @param {number} coins
    * @param {GameData[]} metadata
   */
  constructor(username, coins, metadata) {
    this.username = username || 'Leon';
    this.coins = coins || 200;
    this.metadata = metadata || [];
  }

  /**
    * @param {GameData} data
    */
  addMetadata(data) {
    this.metadata.push(data);
  }

  /**
   * @param {string} newUsername
   */
  changeUsername(newUsername) {
    this.username = newUsername;
  }

  /**
   * @param {number} val
   */
  setCoins(val) {
    this.coins = val;
  }

  /**
   * @param {number} val
   */
  increaseCoins(val) {
    this.coins += val;
  }
}

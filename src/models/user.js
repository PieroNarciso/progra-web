export class User {
  /**
    * @typedef {Object} MetaData
    * @property {number} apuesta
    * @property {number} ganancia
    * @property {'A' | 'B'} maq
    *
   * @param {string} username
    * @param {number} coins
    * @param {MetaData} data
   */
  constructor(username, coins = 200, data = []) {
    this.username = username || null;
    this.coins = coins;
    this.metadata = data;
  }

  /**
    * @param {MetaData} data
    */
  addMetadata(data) {
    this.metadata.push(data);
  }

  /**
   * @param {string} newUsername
   */
  __changeUsername(newUsername) {
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

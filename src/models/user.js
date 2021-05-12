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
   * @param {number} acumGanancia
   * @param {number[]} ganancias
   */
  constructor(
    username,
    coins = 200,
    data = [],
    acumGanancia = 0,
    ganancias = []
  ) {
    this.username = username || null;
    this.coins = coins;
    this.acumGanancia = acumGanancia;
    this.ganancias = ganancias;
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
   * Retorna el promedio de ganancias durante el juego
  */
  getGananciaPromedio() {
    let sum = 0;
    this.ganancias.forEach(num => {
      sum += num;
    });
    return sum / this.ganancias.length
  }

  /**
   * Incrementa las monedas
   *
   * @param {number} val
   */
  increaseCoins(val) {
    this.acumGanancia += val;
    this.ganancias.push(val);
    this.coins += val;
  }

  /**
   * Decrementa las monedas en `val`
   *
   * @param {number} val
  */
  decreaseCoins(val) {
    this.coins -= val;
  }
}

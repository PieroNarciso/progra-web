import {State} from './state';


export class Store {
  /**
    * `Store`
    *
    * Maneja el store con el localStorage para guardar y cargar
    * lo que esté dentro del store
    *
    * @param {State} state
    */
  constructor(state) {
    if (state) {
      this.store = state;
    }
  }

  save() {
    this.store.storeBeforeSave();
    localStorage.setItem('store', JSON.stringify(this.store));
  }

  /**
    * Carga el `localStorage` y hace el `parsing`
    * Si no hay store previo en el localStorage se asigna un objecto vacio
    *
    * @returns {boolean} Retorna `false` si es que no hay store en localStorage
    */
  load() {
    const store = localStorage.getItem('store');
    if (store) {
      this.store = new State(JSON.parse(store));
      return true;
    }
    return false;
  }

  /**
    * Crea un `store` en base a un state
    *
    * @param {State} state
    */
  create(state) {
    this.store = state;
  }

  /**
    * @returns {State}
    */
  getStore() {
    return this.store;
  }
}

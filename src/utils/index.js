// GLOBAL VARIABLES
const data = {
  username: 'Leon',
  coins: 200,
}

// Utilities funtions

/** @returns {boolean} */
const isFirstTime = () => {
  const storeValue = window.localStorage.getItem('firstTime');
  
  return storeValue === null ? true : false;
}
const setNotFirstTime = () => {
  window.localStorage.setItem('firstTime', false); 
}

/**
  * Removes Main Menu Element
  */
const removeMainMenu = () => {
  const mainMenu = document.querySelector('#main-menu');
  mainMenu.remove();
}

const showCoinsStatus = () => {
  document.querySelector('#coins-container').classList.remove('hidden');
}

/** Set backgroundImage dynamically */
const setBackgroundImg = () => {
  document.body.style.backgroundImage = 'url(./src/assets/img/casino.png)';
}
/**
  * Muestra las monedas y nombres de las máquinas para apostar
  */
const showCoinsAndMaqNames = () => {
  const gameContainer = document.querySelector('#game-container');
  gameContainer.classList.remove('hidden');
}

/**
  * Renderiza el nombre de usuario en la cabecera
  * @param {string} username Nombre del ususario
  */
const setUsernameInHeader = (username) => {
  document.querySelector('#header-title').textContent = username;
}

/**
 * First POPUP
 * Solo se abre cuando es la primera vez que el usuario entra al juego
 * Luego no se vuelve a mostrar más
 */

/** Input text del popup */
const inputElement = document.querySelector('#input-popup');

/* Si entra por primera vez o no  */
/** Popup component */
const popupContainer = document.querySelector('#popup-container');

if (!isFirstTime()) {
  popupContainer.remove();
  // Asigna el título al nombre de usuario
  setUsernameInHeader(data.username);
  showCoinsStatus();
} else {
  inputElement.select();
}

/**
 * Asigna el nombre de usuario y agrega al `localStorage` que
 * el usuario ya se registró una vez
 * El nombre del usuario se agrega en el título del header
 */
const joinGame = () => {
  const inputValue = inputElement.value;
  data.username = inputValue;
  window.localStorage.setItem('firstTime', false);
  // Change title to show login username
  setUsernameInHeader(data.username);
  showCoinsStatus();
  popupContainer.remove();
};

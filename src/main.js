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
 * First POPUP
 * Solo se abre cuando es la primera vez que el usuario entra al juego
 * Luego no se vuelve a mostrar más
 */

/** Input text del popup */
const inputElement = document.querySelector('#input-popup');

/* Si entra por primera vez o no  */
/** Popup component */
const popupElement = document.querySelector('#first-popup');

if (!isFirstTime()) {
  popupElement.remove();
} else {
  inputElement.select();
}

/**
 * Asigna el nombre de usuario y agrega al `localStorage` que
 * el usuario ya se registró una vez
 */
const joinGame = () => {
  const inputValue = inputElement.value;
  data.username = inputValue;
  window.localStorage.setItem('firstTime', false);
  popupElement.className += ' hidden';
};

// TODO

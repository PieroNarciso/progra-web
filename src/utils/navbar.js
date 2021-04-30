const optionContainer = document.querySelector('#option-menu');

const openBurgerMenu = () => {
  console.log('Open Burger Menu');
};

const openOptionsMenu = () => {
  optionContainer.className = '';
};

const closeOptionMenu = () => {
  optionContainer.className = 'hidden';
};

/**
 * Close otions menu when click outside of component and is not hidden
 * @param {Event} event
 */
const closeOptionMenuEvent = (event) => {
  if (
    !optionContainer.contains(event.target) &&
    !document.querySelector('#option-button').contains(event.target) &&
    openOptionsMenu.className !== 'hidden'
  ) {
    closeOptionMenu();
  }
};

window.addEventListener('click', closeOptionMenuEvent);

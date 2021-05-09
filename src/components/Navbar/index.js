import store from '../../store';

/**
 * @param {string} username
 */
const render = () => {
  return `
    <nav
      class="bg-primary px-2 py-2 flex justify-between w-full items-center z-50"
    >
      <a id="header-title" class="text-lg text-white font-medium" href="#"
    >CASTLE KING</a
      >
      <div class="flex items-center">
        <div class="inline-block mr-2 flex items-center">
          <span class="text-white mr-1 cursor-default">200.00</span>
          <svg class=" w-6 h-6 text-yellow-400" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M15 4A8 8 0 1 1 7 12A8 8 0 0 1 15 4M3 12A6 6 0 0 0 7 17.65V19.74A8 8 0 0 1 7 4.26V6.35A6 6 0 0 0 3 12Z"
            />
          </svg>
        </div>
        <button
          class="inline-block rounded-full focus:outline-none"
          type="button"
          id="option-button"
        >
          <svg class="w-6 h-6 text-white" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
            />
          </svg>
        </button>
      </div>

      <div
        id="option-menu"
        class="absolute right-1 top-1 bg-white rounded shadow-md hidden"
      >
        <a class="nav" href="/#">Home</a>
        <a class="nav" href="/#/juego">Jugar</a>
        <a class="nav" href="/#/ranking">Ranking</a>
        <a class="nav" href="/#/instrucciones">Instrucciones</a>
        <a class="nav" href="/#/acerca-de">Acerca De</a>
      </div>
    </nav>
  `;
};

/**
 * @typedef {Object} Props
 * @property {string} username
 *
 * @param {Props} props
 */
const Navbar = () => {
  const { username } = store.getStore().user;

  /** toggle menu floating */
  const toggleMenuBar = () => {
    const optionMenu = document.querySelector('#option-menu');
    if (optionMenu.classList.contains('hidden')) {
      optionMenu.classList.remove('hidden');
    } else {
      optionMenu.classList.add('hidden');
    }
  };

  /**
   * @param {MouseEvent} event
   */
  const closeOptionMenu = (event) => {
    if (
      !optionContainer.contains(event.target) &&
      !document.querySelector('#option-button').contains(event.target) &&
      !optionContainer.classList.contains('hidden')
    ) {
      optionContainer.classList.add('hidden');
    }
  };

  const navBar = document.createElement('nav');
  navBar.innerHTML = render();


  navBar
    .querySelector('#option-button')
    .addEventListener('click', toggleMenuBar);
  const optionContainer = navBar.querySelector('#option-menu');

  if (username) {
    navBar.querySelector('#header-title').textContent = username
  }

  navBar.querySelectorAll('.nav').forEach((node) => {
    node.addEventListener('click', toggleMenuBar);
  });

  /** Close option menu cuando se hace clic fuera */
  window.addEventListener('click', closeOptionMenu);

  return navBar;
};

/**
  * @param {string} title
  */
export const changeNavBarTitle = (title) => {
  document.querySelector('#header-title').textContent = title
    ? title
    : 'CASTLE KING';
}

export default Navbar;

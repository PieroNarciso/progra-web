import store from '../../store';
import ChangeName from '../ChangeName';
import Ranking from '../Ranking';
import AcercaDe from '../AcercaDe';
import Instrucciones from '../Instrucciones';

/**
 * @param {string} username
 */
const render = () => {
  const { user } = store.getStore();

  return `
    <audio
      id="audiox"
      loop
      src="Glide-with-me.mp3"
      type="audio/mpeg"
      class="hidden"
    ></audio>
    <nav
      class="bg-primary px-2 py-2 flex justify-between w-full items-center z-50"
    >
      <div class="flex items-center">
        <h1
          id="header-title"
          class="text-lg text-white font-medium cursor-pointer"
        >
          CASTLE KING
        </h1>
        <svg
          id="lapiz"
          class="hidden ml-2 w-6 h-6 text-white"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
          />
        </svg>
      </div>
      <div class="flex items-center">
        <div class="inline-block mr-2 flex items-center">
          <span id="coins-val" class="text-white mr-1 cursor-default"
            >${user.coins}</span
          >
          <svg class=" w-6 h-6 text-yellow-400" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M15 4A8 8 0 1 1 7 12A8 8 0 0 1 15 4M3 12A6 6 0 0 0 7 17.65V19.74A8 8 0 0 1 7 4.26V6.35A6 6 0 0 0 3 12Z"
            />
          </svg>
        </div>
        <div class="inline-block mr-2 flex items-center">
          <span id="ganancia-val" class="text-white mr-1 cursor-default"
            >${user.acumGanancia}</span
          >
          <svg class=" w-6 h-6 text-yellow-400" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
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
        class="absolute right-1 top-1 bg-white rounded shadow-md hidden z-50"
      >
        <a class="nav flex items-center justify-center" href="/#">
          <svg class="h-6 w-6 inline-block" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
            />
          </svg>
          <span class="ml-2">Home</span></a
        >
        <a class="nav flex items-center justify-center" href="/#/juego">
          <svg class="h-6 w-6 inline-block" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M17.5,7A5.5,5.5 0 0,1 23,12.5A5.5,5.5 0 0,1 17.5,18C15.79,18 14.27,17.22 13.26,16H10.74C9.73,17.22 8.21,18 6.5,18A5.5,5.5 0 0,1 1,12.5A5.5,5.5 0 0,1 6.5,7H17.5M6.5,9A3.5,3.5 0 0,0 3,12.5A3.5,3.5 0 0,0 6.5,16C7.9,16 9.1,15.18 9.66,14H14.34C14.9,15.18 16.1,16 17.5,16A3.5,3.5 0 0,0 21,12.5A3.5,3.5 0 0,0 17.5,9H6.5M5.75,10.25H7.25V11.75H8.75V13.25H7.25V14.75H5.75V13.25H4.25V11.75H5.75V10.25M16.75,12.5A1,1 0 0,1 17.75,13.5A1,1 0 0,1 16.75,14.5A1,1 0 0,1 15.75,13.5A1,1 0 0,1 16.75,12.5M18.75,10.5A1,1 0 0,1 19.75,11.5A1,1 0 0,1 18.75,12.5A1,1 0 0,1 17.75,11.5A1,1 0 0,1 18.75,10.5Z"
            />
          </svg>
          <span class="ml-2">Jugar</span></a
        >
        <button
          class="nav w-full flex items-center justify-center"
          id="open-ranking"
        >
          <svg class="h-5 w-5 inline-block" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M16.59,9.42L12,4.83L7.41,9.42L6,8L12,2L18,8L16.59,9.42M16.59,15.42L12,10.83L7.41,15.42L6,14L12,8L18,14L16.59,15.42M16.59,21.42L12,16.83L7.41,21.42L6,20L12,14L18,20L16.59,21.42Z"
            />
          </svg>
          <span class="ml-2">Ranking</span>
        </button>
        <button
          class="nav w-full flex items-center justify-center"
          id="open-instrucciones"
        >
          <svg class="h-6 w-6 inline-block" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M21,4H3A2,2 0 0,0 1,6V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V6A2,2 0 0,0 21,4M3,19V6H11V19H3M21,19H13V6H21V19M14,9.5H20V11H14V9.5M14,12H20V13.5H14V12M14,14.5H20V16H14V14.5Z"
            />
          </svg>
          <span class="ml-2">Instrucciones</span>
        </button>
        <button
          class="nav w-full flex items-center justify-center"
          id="open-acerca-de"
        >
          <svg class="h-6 w-6 inline-block" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M21 5V7H3V5H21M3 17H12V15H3V17M3 12H21V10H3V12M18 14C19.11 14 20 14.9 20 16S19.11 18 18 18 16 17.11 16 16 16.9 14 18 14M14 22V21C14 19.9 15.79 19 18 19S22 19.9 22 21V22H14Z"
            />
          </svg>
          <span class="ml-2">Acerca De</span>
        </button>
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
    navBar.querySelector('#header-title').textContent = username;
  }

  /**
   * Mostrar icono de lapiz al colocar el cursor por encima
   */
  navBar.querySelector('#header-title').addEventListener('mouseenter', () => {
    navBar.querySelector('#lapiz').classList.remove('hidden');
  });
  navBar.querySelector('#header-title').addEventListener('mouseleave', () => {
    navBar.querySelector('#lapiz').classList.add('hidden');
  });

  /**
   * Abrir emergentes
   */
  navBar.querySelector('#header-title').addEventListener('click', () => {
    document.body.appendChild(ChangeName());
  });
  navBar.querySelector('#open-ranking').addEventListener('click', () => {
    document.body.appendChild(Ranking());
  });
  navBar.querySelector('#open-acerca-de').addEventListener('click', () => {
    document.body.appendChild(AcercaDe());
  });
  navBar.querySelector('#open-instrucciones').addEventListener('click', () => {
    document.body.appendChild(Instrucciones());
  });

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
};

/**
 * Incrementa las monedas del usuario en `val` y renderiza las monedas actuales
 * en el `Navbar` y la ganancia acumulada
 *
 * @param {number} val
 */
export const increaseCoins = (val) => {
  const { user } = store.getStore();
  user.increaseCoins(val);
  document.querySelector('#coins-val').textContent = user.coins.toFixed(2);
  document.querySelector(
    '#ganancia-val'
  ).textContent = user.acumGanancia.toFixed(2);
};

/**
 * Decrementa las monedas del usuario en `val` y renderiza las monedas
 * actuales en el `Navbar`
 *
 * @param {number} val
 */
export const decreaseCoins = (val) => {
  const { user } = store.getStore();
  user.decreaseCoins(val);
  document.querySelector('#coins-val').textContent = user.coins.toFixed(2);
};

export default Navbar;

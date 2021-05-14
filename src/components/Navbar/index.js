import store from '../../store';
import ChangeName from '../ChangeName';
import Ranking from '../Ranking';
import AcercaDe from '../AcercaDe';
import Instrucciones from '../Instrucciones';

/**
 * @param {string} username
 */
const render = () => {

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
            >200.00</span
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
            >0.00</span
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
        <a class="nav" href="/#">Home</a>
        <a class="nav" href="/#/juego">Jugar</a>
        <button class="nav w-full" id="open-ranking">Ranking</button>
        <button class="nav w-full" id="open-instrucciones">Instrucciones</button>
        <button class="nav w-full" id="open-acerca-de">Acerca De</button>
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

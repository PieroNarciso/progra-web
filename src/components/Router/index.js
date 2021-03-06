import Popup, { PopupEvents } from '../Popup';
import MainPage from '../../views/MainPage';
import GameView, {GameViewEvents} from '../../views/GameView';

import { pickRandName } from '../../utils';


/**
 * @param {HTMLDivElement} viewElement
 */
const Router = (viewElement) => {
  const { hash } = window.location;

  viewElement.className = '';
  viewElement.style.backgroundImage = 'url("casino.png")';

  const firsTime = localStorage.getItem('firstTime');
  if (firsTime === null || firsTime === false) {
    window.location.hash = '#'
    viewElement.className = 'flex items-center justify-center';
    viewElement.innerHTML = Popup({ username: pickRandName() });
    PopupEvents(viewElement);
    return;
  }

  viewElement.innerHTML = '';

  // Router logic
  if (!hash || hash === '#/' || hash === '#') {
    viewElement.className = 'flex justify-center items-center';
    viewElement.appendChild(MainPage())
  } else if (hash === '#/juego') {
    viewElement.style.backgroundImage = 'url("casino.png")';
    viewElement.innerHTML = GameView();
    GameViewEvents(viewElement);
  } else if (hash === '#/acerca-de') {
    viewElement.innerHTML = `#/acerca-de`;
  } else {
    viewElement.innerHTML = `404 Not Found`;
  }
};

export default Router;

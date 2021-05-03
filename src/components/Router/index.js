import Popup, { PopupEvents } from '../Popup';
import MainPage from '../../views/MainPage';
import GameView from '../../views/GameView';
import RankingView from '../../views/RankingView';

/**
 * @param {HTMLDivElement} viewElement
 */
const Router = (viewElement) => {
  const { hash } = window.location;

  viewElement.className = '';
  viewElement.style.backgroundImage = '';

  const firsTime = localStorage.getItem('firstTime');
  if (firsTime === null || firsTime === false) {
    window.location.hash = '#'
    viewElement.className = 'flex items-center justify-center';
    viewElement.innerHTML = Popup({ username: 'Leon' });
    PopupEvents(viewElement);
    return;
  }

  // Router logic
  if (!hash || hash === '#/' || hash === '#') {
    viewElement.className = 'flex justify-center';
    viewElement.innerHTML = MainPage();
  } else if (hash === '#/juego') {
    viewElement.style.backgroundImage = 'url("casino.png")';
    viewElement.innerHTML = GameView();
  } else if (hash === '#/ranking') {
    viewElement.className = 'flex justify-center py-6'
    viewElement.innerHTML = RankingView();
  } else if (hash === '#/instrucciones') {
    viewElement.innerHTML = 'Instrucciones';
  } else if (hash === '#/acerca-de') {
    viewElement.innerHTML = `Acerca De`;
  } else {
    viewElement.innerHTML = `Default`;
  }
};

export default Router;

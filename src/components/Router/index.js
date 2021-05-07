import Popup, { PopupEvents } from '../Popup';
import ChangeName, { ChangeNameEvents } from '../ChangeName';
import MainPage from '../../views/MainPage';
import GameView, {GameViewEvents} from '../../views/GameView';
import RankingView from '../../views/RankingView';
import InstruccionesView from '../Instrucciones/Index';


/**
 * @param {HTMLDivElement} viewElement
 */

var randomNames = ['Crow', 'Dog', 'Raindeer', 'Budgie', 'Lemur', 'Gorilla', 'Sheep']
function pickRandName() {
  var randomNumber = Math.floor(Math.random() * randomNames.length)
  return randomNumber
}

const Router = (viewElement) => {
  const { hash } = window.location;

  viewElement.className = '';
  viewElement.style.backgroundImage = '';

  const firsTime = localStorage.getItem('firstTime');
  if (firsTime === null || firsTime === false) {
    window.location.hash = '#'
    viewElement.className = 'flex items-center justify-center';
    viewElement.innerHTML = Popup({ username: randomNames[pickRandName()] });
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
    GameViewEvents(viewElement);
  } else if (hash === '#/ranking') {
    viewElement.className = 'flex justify-center py-6'
    viewElement.innerHTML = RankingView();
  } else if (hash === '#/instrucciones') {
    viewElement.className="flex justyfy-center"
    viewElement.innerHTML = InstruccionesView();
  } else if (hash === '#/acerca-de') {
    viewElement.innerHTML = `#/acerca-de`;
  } else {
    viewElement.innerHTML = `Default`;
  }
};

export default Router;

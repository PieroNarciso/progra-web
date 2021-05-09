import Navbar from './components/Navbar';
import VolumeControl from './components/VolumeControl';
import ChangeName from './components/ChangeName';

import Router from './components/Router';

const App = () => {
  /**
   * Se encarga de que el alto de `view` sea la altura de la pantalla
   * siempre (quitando el Header)
   */
  const resiveViewHeight = () => {
    viewRoot.style.height = `${
      window.innerHeight - document.querySelector('nav').offsetHeight
    }px`;
  };

  const root = document.querySelector('#app');

  const viewRoot = document.createElement('div');
  viewRoot.id = 'view';
  root.appendChild(Navbar());
  root.appendChild(VolumeControl());

  /**
   * Abrir el componente para cambiar el nombre cuando se da click en el
   * nombre del usuario
   */
  root.querySelector('#header-title').addEventListener('click', () => {
    root.appendChild(ChangeName());
  });

  /** Resive View */
  resiveViewHeight();
  window.addEventListener('resize', resiveViewHeight);

  root.appendChild(viewRoot);

  /** Cambia el contenido de la pagina cuando hay un cambio
   * en el url
   */
  Router(viewRoot);
  window.addEventListener('hashchange', () => Router(viewRoot));
};

export default App;

import Ranking from '../../components/Ranking';
import AcercaDe from '../../components/AcercaDe';

const MainPage = () => {
  const template = `
  <div class="flex flex-col gap-4 mx-4 justify-center w-full"> 
    <a class="btn btn-primary" href="/#/juego">Jugar</a>
    <button class="btn btn-secondary" id="open-ranking">Ranking</button>
    <a class="btn btn-secondary" href="/#/instrucciones">Instrucciones</a>
    <button class="btn btn-secondary" id="open-acerca-de">Acerca De</button>
  </div>
  `;

  const containerDiv = document.createElement('div');
  containerDiv.innerHTML = template;

  containerDiv.querySelector('#open-ranking').addEventListener('click', () => {
    document.body.appendChild(Ranking());
  });

  containerDiv
    .querySelector('#open-acerca-de')
    .addEventListener('click', () => {
      document.body.appendChild(AcercaDe());
    });

  return containerDiv;
};

export default MainPage;

import Ranking from '../../components/Ranking';
import AcercaDe from '../../components/AcercaDe';
import Instrucciones from '../../components/Instrucciones';

const MainPage = () => {
  const template = `
  <div class="flex flex-col gap-4 mx-4 justify-center w-full"> 
    <a class="btn btn-primary" href="/#/juego">Jugar</a>
    <button class="btn btn-secondary" id="open-ranking">Ranking</button>
    <button class="btn btn-secondary" id="open-instrucciones">Instrucciones</a>
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
  containerDiv.querySelector('#open-instrucciones').addEventListener('click', () => {
    document.body.appendChild(Instrucciones());
  });

  return containerDiv;
};

export default MainPage;

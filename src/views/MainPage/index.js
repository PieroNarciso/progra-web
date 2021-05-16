import Ranking from '../../components/Ranking';
import AcercaDe from '../../components/AcercaDe';
import Instrucciones from '../../components/Instrucciones';

const MainPage = () => {
  const template = `
  <div class="flex flex-col gap-4 mx-4 justify-center w-full"> 
    <a class="btn btn-primary flex items-center justify-center" href="/#/juego">
<svg class="h-7 w-7 inline-block" viewBox="0 0 24 24">
    <path fill="currentColor" d="M17.5,7A5.5,5.5 0 0,1 23,12.5A5.5,5.5 0 0,1 17.5,18C15.79,18 14.27,17.22 13.26,16H10.74C9.73,17.22 8.21,18 6.5,18A5.5,5.5 0 0,1 1,12.5A5.5,5.5 0 0,1 6.5,7H17.5M6.5,9A3.5,3.5 0 0,0 3,12.5A3.5,3.5 0 0,0 6.5,16C7.9,16 9.1,15.18 9.66,14H14.34C14.9,15.18 16.1,16 17.5,16A3.5,3.5 0 0,0 21,12.5A3.5,3.5 0 0,0 17.5,9H6.5M5.75,10.25H7.25V11.75H8.75V13.25H7.25V14.75H5.75V13.25H4.25V11.75H5.75V10.25M16.75,12.5A1,1 0 0,1 17.75,13.5A1,1 0 0,1 16.75,14.5A1,1 0 0,1 15.75,13.5A1,1 0 0,1 16.75,12.5M18.75,10.5A1,1 0 0,1 19.75,11.5A1,1 0 0,1 18.75,12.5A1,1 0 0,1 17.75,11.5A1,1 0 0,1 18.75,10.5Z" />
</svg>
    <span class="ml-2">Jugar</span></a>
    <button class="btn btn-secondary flex items-center justify-center" id="open-ranking">
<svg class="h-6 w-6 inline-block"  viewBox="0 0 24 24">
    <path fill="currentColor" d="M16.59,9.42L12,4.83L7.41,9.42L6,8L12,2L18,8L16.59,9.42M16.59,15.42L12,10.83L7.41,15.42L6,14L12,8L18,14L16.59,15.42M16.59,21.42L12,16.83L7.41,21.42L6,20L12,14L18,20L16.59,21.42Z" />
</svg>
      <span class="ml-2">Ranking</span></button>
    <button class="btn btn-secondary flex items-center justify-center" id="open-instrucciones">
<svg class="h-7 w-7 inline-block"  viewBox="0 0 24 24">
    <path fill="currentColor" d="M21,4H3A2,2 0 0,0 1,6V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V6A2,2 0 0,0 21,4M3,19V6H11V19H3M21,19H13V6H21V19M14,9.5H20V11H14V9.5M14,12H20V13.5H14V12M14,14.5H20V16H14V14.5Z" />
</svg>
    <span class="ml-2">Instrucciones</span></a>
    <button class="btn btn-secondary flex items-center justify-center" id="open-acerca-de">
<svg class="h-7 w-7 inline-block" viewBox="0 0 24 24">
    <path fill="currentColor" d="M21 5V7H3V5H21M3 17H12V15H3V17M3 12H21V10H3V12M18 14C19.11 14 20 14.9 20 16S19.11 18 18 18 16 17.11 16 16 16.9 14 18 14M14 22V21C14 19.9 15.79 19 18 19S22 19.9 22 21V22H14Z" />
</svg>
    <span class="ml-2">Acerca De</span></button>
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
  containerDiv
    .querySelector('#open-instrucciones')
    .addEventListener('click', () => {
      document.body.appendChild(Instrucciones());
    });

  return containerDiv;
};

export default MainPage;

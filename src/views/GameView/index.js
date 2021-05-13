import store from '../../store';

const GameView = () => {
  return /*html*/ `
    <div class="flex flex-wrap h-full">
      <div class="relative z-0 grid grid-rows-5 w-full h-1/2 items-center justify-center">
        <img id= 'maq_celeste_Mov' class="h-4/5 row-start-1 row-end-6" src="maq-celeste.png">
      </div>
      <div class="absolute z-40 grid grid-rows-5 grid-cols-1 w-full h-1/2 items-center justify-items-center">
          <div class="nomMaquina1 flex justify-center">
           <h3 class="text-white mb-16 ml-1 z-40"><p>YOUR<br>FORTUNE</p></h3>
          </div>
          <div id="imgePirata" class="z-10 row-start-1 mt-14 ml-1">
            <img class="h-10" src="pirata.png">
          </div>
          <input id ='cantidad-maq-1' class="row-start-3 row-end-4 border-white text-white w-12 h-5 mt-16 -ml-1 text-xs bg-black rounded-md border-2" type="text" value="10">
          <div class="flex row-start-4 row-end-5 w-40 h-3/5 justify-around">
            <button id = 'jugar1' class="apost px-2 py-0 botones rounded-md bg-blue-500 text-white text-xs h-6 border-black"><b>Apostar</b></button>
            <div class = "flex p-1 pb-2 items-center h-full">
              <button id="aumentar1" class="mr-1 botones p-1 pb-0 transform rotate-180 bg-blue-500 text-xs text-white"><b>v</b></button>
              <button id="disminuir1" class="botones p-1 pt-0 bg-blue-500 text-xs text-white"><b>v</b></button>
            </div>
          </div>
      </div>

      <div class="relative z-0 grid grid-rows-5 w-full h-1/2 items-center justify-center">
        <img id ='maq_rosa_Mov' class="h-4/5 row-start-1 row-end-6" src="maq-rosa.png" >
      </div>
      <div class="absolute bottom-0 z-40 grid grid-rows-5 grid-cols-1 w-full h-1/2 items-center justify-items-center">
        <div class="nomMaquina2 mt-28 z-20 ml-1 text-white">
          <h3 class=><p>CRAZY<br>MACHINE</p></h3>
        </div>
        <div id="imgeEgip" class="z-10 row-start-2 mb-7 ml-1">
          <img class="h-11" src="Egipto.png">
        </div>
        <input id ='cantidad-maq-2' class="row-start-3 row-end-4 border-white text-white w-12 h-5 mt-28 -ml-1 text-xs bg-black rounded-md border-2" type="text" value="10">
        <div class="mt-11 flex row-start-4 row-end-5 w-40 h-3/5 justify-around">
          <button id = 'jugar2' class="apost px-2 py-0 botones rounded-md bg-pink-500 text-white text-xs h-6 border-black"><b>Apostar</b></button>
          <div class = "flex p-1 pb-2 items-center h-full">
            <button id="aumentar2" class="mr-1 botones p-1 pb-0 transform rotate-180 bg-pink-500 text-xs text-white"><b>v</b></button>
            <button id="disminuir2" class="botones p-1 pt-0 bg-pink-500 text-xs text-white"><b>v</b></button>
          </div>
        </div>
      </div>
    </div>
    </div>

    <audio id='sonido1' src="slot-machine-sound.mp3" type="audio/mpeg"></audio>
    <div class="monedas">
      <div class="moneda_img"><img src="/moneda.png" /></div>
      <div class="moneda_img"><img src="/moneda.png" /></div>
      <div class="moneda_img"><img src="/moneda.png" /></div>
      <div class="moneda_img"><img src="/moneda.png" /></div>
      <div class="moneda_img"><img src="/moneda.png" /></div>
      <div class="moneda_img"><img src="/moneda.png" /></div>
      <div class="moneda_img"><img src="/moneda.png" /></div>
    </div>
  `;
};

/**
 * @param {HTMLDivElement} viewElement
 */
export const GameViewEvents = (viewElement) => {
  const { user, music } = store.getStore();

  const bloquearBotones = (tipo, nro) => {
    try {
      if (tipo == 0) {
        if (nro == 1) {
          viewElement
            .querySelector('#aumentar1')
            .classList.replace('bg-gray-400', 'bg-blue-500');
          viewElement
            .querySelector('#disminuir1')
            .classList.replace('bg-gray-400', 'bg-blue-500');
          viewElement
            .querySelector('#jugar'.concat(nro))
            .classList.replace('bg-gray-400', 'bg-blue-500');
        } else if (nro == 2) {
          viewElement
            .querySelector('#aumentar2')
            .classList.replace('bg-gray-400', 'bg-pink-500');
          viewElement
            .querySelector('#disminuir2')
            .classList.replace('bg-gray-400', 'bg-pink-500');
          viewElement
            .querySelector('#jugar'.concat(nro))
            .classList.replace('bg-gray-400', 'bg-pink-500');
        }
        viewElement.querySelector('#jugar'.concat(nro)).disabled = false;
        viewElement.querySelector('#aumentar'.concat(nro)).disabled = false;
        viewElement.querySelector('#disminuir'.concat(nro)).disabled = false;
      } else if (tipo == 3) {
        if (nro == 1)
          viewElement
            .querySelector('#jugar'.concat(nro))
            .classList.replace('bg-blue-500', 'bg-gray-400');
        else
          viewElement
            .querySelector('#jugar'.concat(nro))
            .classList.replace('bg-pink-500', 'bg-gray-400');
        viewElement.querySelector('#jugar'.concat(nro)).disabled = true;
      } else {
        if (tipo == 1) {
          if (nro == 1) {
            var btn = viewElement.querySelector('#aumentar1');
            btn.classList.remove('bg-blue-500');
          } else if (nro == 2) {
            var btn = viewElement.querySelector('#aumentar2');
            btn.classList.remove('bg-pink-500');
          }
        } else if (tipo == 2) {
          if (nro == 1) {
            var btn = viewElement.querySelector('#disminuir1');
            btn.classList.remove('bg-blue-500');
          } else if (nro == 2) {
            var btn = viewElement.querySelector('#disminuir2');
            btn.classList.remove('bg-pink-500');
          }
        }
        btn.classList.add('bg-gray-400');
        btn.disabled = true;
      }
    } catch { }
  };
  const revisar = (num) => {
    const inputTxt = viewElement.querySelector('#cantidad-maq-'.concat(num));
    if (inputTxt.value >= user.coins) {
      if (inputTxt.value > user.coins) bloquearBotones(3, num);
      bloquearBotones(1, num);
    }
    if (inputTxt.value <= 0) {
      bloquearBotones(2, 2);
      bloquearBotones(3, num);
    }
    if (inputTxt.value > 0 && inputTxt.value < user.coins) {
      bloquearBotones(0, num);
    }
  };
  const aumentarMonedas = (num) => {
    const nuevoMonto =
      parseInt(viewElement.querySelector('#cantidad-maq-'.concat(num)).value) +
      10;
    if (user.coins >= nuevoMonto) {
      viewElement.querySelector('#cantidad-maq-' + num).value = nuevoMonto;
      if (nuevoMonto >= user.coins) bloquearBotones(1, num);
      else bloquearBotones(0, num);
      if (nuevoMonto == user.coins) bloquearBotones(3, num);
    }
  };
  const disminuirMonedas = (num) => {
    const nuevoMonto =
      parseInt(viewElement.querySelector('#cantidad-maq-'.concat(num)).value) -
      10;
    if (nuevoMonto >= 0) {
      viewElement.querySelector('#cantidad-maq-' + num).value = nuevoMonto;
      if (0 >= nuevoMonto) bloquearBotones(2, num);
      else bloquearBotones(0, num);
      if (nuevoMonto == 0) bloquearBotones(3, num);
    }
  };
  const soloNumeros = (event) => {
    event = event ? event : window.event;
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  };
  const sonidoBoton = () => {
    const aud1 = viewElement.querySelector('#sonido1');
    aud1.volume = 0.2;
    aud1.play();
  };

  viewElement
    .querySelector('#aumentar1')
    .addEventListener('click', () => aumentarMonedas(1));
  viewElement
    .querySelector('#disminuir1')
    .addEventListener('click', () => disminuirMonedas(1));
  viewElement
    .querySelector('#aumentar2')
    .addEventListener('click', () => aumentarMonedas(2));
  viewElement
    .querySelector('#disminuir2')
    .addEventListener('click', () => disminuirMonedas(2));
  viewElement
    .querySelector('#cantidad-maq-1')
    .addEventListener('change', () => revisar(1));
  viewElement
    .querySelector('#cantidad-maq-2')
    .addEventListener('change', () => revisar(2));
  viewElement
    .querySelector('#cantidad-maq-1')
    .addEventListener('keypress', soloNumeros);
  viewElement
    .querySelector('#cantidad-maq-2')
    .addEventListener('keypress', soloNumeros);
  viewElement
    .querySelector('#jugar1')
    .addEventListener('click', sonidoBoton);
  viewElement
    .querySelector('#jugar2')
    .addEventListener('click', sonidoBoton);
};

export default GameView;

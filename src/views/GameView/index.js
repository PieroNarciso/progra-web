import store from '../../store';

const GameView = () => {
  return /*html*/ `

    <div class="nomMaquina1">
      <h3 class="text-white">YOUR FORTUNE</h3>
    </div>

    <div class="nomMaquina2">
      <h3 class=>CRAZY MACHINE</h3>
    </div>

    <div class="flex flex-wrap h-full">
      <div class="flex w-full h-1/2 items-center border-black border-4 justify-center">
        <img id= 'maq_celeste_Mov' class="h-4/5 " src="maq-celeste.png">
        <div id="centrardiv" class="">
          <input id ='cantidad-maq-1' class="border-blue-500 text-black w-16 h-10 bg-white rounded-md border-2" type="text" value="10">
          <button id = 'jugar1' class="rounded-md bg-blue-500 text-white"><b>Apostar</b></button>
          <button id="aumentar1" class="transform rotate-180 bg-blue-500 text-xs"><b>v</b></button>
          <button id="disminuir1" class="bg-blue-500 text-xs"><b>v</b></button>
        </div>
        <div id="imgePirata" class="">
          <img class=" h-10" src="pirata.png">
        </div>
      </div>
      <div class="flex justify-center items-center w-full h-1/2 border-black border-4">
        <img id ='maq_rosa_Mov' class="h-4/5" src="maq-rosa.png" >
        <div id="centrardiv2" class="">
          <input id ='cantidad-maq-2' class="text-black w-16 h-10 border-pink-500 bg-white rounded-md border-2" type="text" value="10">
          <button id = 'jugar2' class="rounded-md bg-pink-500 text-white"><b>Apostar</b></button>
          <button id="aumentar2" class="transform rotate-180 bg-pink-500 text-xs"><b>v</b></button>
          <button id="disminuir2" class="bg-pink-500 text-xs"><b>v</b></button>
        </div>
        <div id="imgeEgip" class="">
          <img class=" h-11" src="Egipto.png">
        </div>
      </div>
    </div>
    
    </div>

    
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
    } catch {}
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
};

export default GameView;

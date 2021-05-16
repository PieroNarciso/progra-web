import store from '../../store'
import  {apostarYJugar, maquinas} from '../../utils/tragamonedas';
import {increaseCoins, decreaseCoins} from '../../components/Navbar';
const GameView = () => {
  return /*html*/ `
    <div class="grid grid-cols-1 grid-rows-2 h-full overflow-hidden">
      <div class ="row-start-1 flex flex-wrap w-full">
        <div class="relative z-0 grid grid-rows-5 w-full h-full items-center justify-center">
          <img class="h-4/5 row-start-1 row-end-6" src="maq-celeste.png">
        </div>
        <div id= 'maq_celeste_Mov' class="absolute z-10 grid grid-rows-5 grid-cols-1 w-full h-1/2 items-center justify-items-center">
          <div class="nomMaquina1 flex flex-col justify-start">
            <h3 id="maquina1" class="text-white pb-3 ml-1 z-20"><p>YOUR<br>FORTUNE</p></h3>
            <p id='lin1' class="pb-5 m-0 text-center text-black">¡Ganaste!</p>
          </div>
          <div id="imgePirata" class="z-10 row-start-1 mt-14 ml-1">
            <img class="h-10" src="pirata.png">
          </div>
          <div class="flex row-start-3 mb-1 row-end-4 w-40 mt-16 justify-evenly">
            <input id ='cantidad-maq-1' class="border-white text-white ml-2 w-12 h-5 text-xs bg-black rounded-md border-2" type="text" value="10">
            <div class="flex items-center justify-evenly w-16">
              <img class="h-3"src="coins-g.png">
              <p class="text-white text-xs">Gan.:</p>
              <p id="gan-maq-1" class="text-white text-xs">0<p>
            </div>
          </div>
          <div class="flex row-start-4 row-end-5 w-40 h-3/5 justify-around">
            <button id = 'jugar1' class="apost px-2 py-0 botones rounded-md bg-blue-500 text-white text-xs h-6 border-black"><b>Apostar</b></button>
            <button id = 'jugar4' class="apost px-2 py-0 botones rounded-md bg-blue-500 text-white text-xs h-6 border-black hidden"><b>Cobrar</b></button>
            <div class = "flex p-1 pb-2 items-center h-full z-40">
              <button id="aumentar1" class="mr-1 botones p-1 pb-0 transform rotate-180 bg-blue-500 text-xs text-white"><b>v</b></button>
              <button id="disminuir1" class="botones p-1 pt-0 bg-blue-500 text-xs text-white"><b>v</b></button>
            </div>
          </div>
          <div class="flex justify-around mb-72 row-start-5 w-36">
            <img id = 'letra1' class ="w-12" src='A.png'>
            <img id = 'letra1-1' class ="w-12" src='A.png'>
          </div>
        </div>
      </div>


      <div class="row-start-2 flex flex-wrap z-30">
        <div class="relative z-0 grid grid-rows-5 w-full h-full items-center justify-center">
          <img  class="h-4/5 row-start-1 row-end-6" src="maq-rosa.png" >
        </div>
        <div id ='maq_rosa_Mov' class="absolute bottom-0 z-10 grid grid-rows-5 grid-cols-1 w-full h-1/2 items-center justify-items-center">
          <div class="nomMaquina2 flex flex-col justify-start z-20 h-24">
            <h3 id="maquina2" class="mt-24 z-20 ml-1 text-white"><p>CRAZY<br>MACHINE</p></h3>
            <p id='lin2' class="mt-3 text-center text-black">¡Ganaste!</p>
          </div>
          <div id="imgeEgip" class="z-10 row-start-2 mb-7 ml-1">
            <img class="h-11" src="Egipto.png">
          </div>
          <div class="flex row-start-3 row-end-4 w-40 mt-28 mb-2 justify-evenly">
            <input id ='cantidad-maq-2' class="border-white text-white ml-2 w-12 h-5 text-xs bg-black rounded-md border-2" type="text" value="10">
            <div class="flex items-center justify-evenly w-16">
              <img class="h-3"src="coins-g.png">
              <p class="text-white text-xs">Gan.:</p>
              <p id="gan-maq-1" class="text-white text-xs">0<p>
            </div>
          </div>
          <div class="mt-11 flex row-start-4 row-end-5 w-40 h-3/5 justify-around">
            <button id = 'jugar2' class="apost px-2 py-0 botones rounded-md bg-pink-500 text-white text-xs h-6 border-black"><b>Apostar</b></button>
            <button id = 'jugar3' class="apost px-2 py-0 botones rounded-md bg-pink-500 text-white text-xs h-6 border-black hidden"><b>Cobrar</b></button>
            <div class = "flex p-1 pb-2 items-center h-full">
              <button id="aumentar2" class="mr-1 botones p-1 pb-0 transform rotate-180 bg-pink-500 text-xs text-white"><b>v</b></button>
              <button id="disminuir2" class="botones p-1 pt-0 bg-pink-500 text-xs text-white"><b>v</b></button>
            </div>
          </div>
          <div class="flex justify-around mb-60 row-start-5 w-36">
            <img id = 'letra2' class ="w-12" src='A.png'>
            <img id = 'letra2-1' class ="w-12" src='A.png'>
          </div>
        </div>
      </div>
    </div>

    <audio id='sonido1' src="slot-machine-sound.mp3" type="audio/mpeg"></audio>
    <audio id='sonido2' src="win-effect.mp3" type="audio/mpeg"></audio>
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
    console.log(user.coins)
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
  }

  let botona= viewElement.querySelector("#jugar1");
  let botonb= viewElement.querySelector("#jugar2");
  let cobrara= viewElement.querySelector("#jugar4");
  let cobrarb= viewElement.querySelector("#jugar3");
  let apt = 0;
  
  const oprimirapostar = (nu) =>{
    const inputTxt1 = viewElement.querySelector("#cantidad-maq-".concat(nu));
    if (user.coins >= inputTxt1.value) {
      user.increaseNumApuestas();
      if (nu == 1) {
        botona.disabled = true;
        botona.classList.replace('bg-blue-500','bg-gray-400')
        apt = parseInt(inputTxt1.value);
        decreaseCoins(apt);
        moverLetra(apt, nu)
      }
      if (nu == 2) {
        botonb.disabled = true;
        botonb.classList.replace('bg-pink-500', 'bg-gray-400')
        apt = parseInt(inputTxt1.value);
        decreaseCoins(apt);
        moverLetra(apt,nu)
      }
    }
  }


  let gananciaa=0;
  let gananciab=0;
  let inte= {};
  let contador=0;
  let contador2=0;
  let lina=viewElement.querySelector("#lin1")
  let linb=viewElement.querySelector("#lin2")
  let zona = viewElement.querySelector("#letra1");
  let zonab= viewElement.querySelector("#letra1-1")
  let zonac=viewElement.querySelector("#letra2");
  let zonad=viewElement.querySelector("#letra2-1");
  var array = ["J.png", "A.png", "K.png"]
  
  function calculo(inte,nu){
    if(nu === 1){
        var intervalo= setInterval(() =>{ 
        contador++
        var Index= Math.floor(Math.random()*array.length)
        zona.src=array[Index];
        if(contador>=15){
          clearInterval(intervalo);
          if(inte.resultado[0] == "J"){
            zona.src="J.png";
          }else if(inte.resultado[0] == "Q"){
            zona.src="Q.png";
          }else if(inte.resultado[0] == "K"){
            zona.src="K.png";
          }else if(inte.resultado[0] == "A"){
            zona.src="A.png";
          }
          contador=0;
        }
      
        },100);
    
        var intervalo2= setInterval(() =>{ 
        contador2++
        var Index2= Math.floor(Math.random()*array.length)
        zonab.src=array[Index2];
        if(contador2>=20){
              clearInterval(intervalo2);
              if(inte.resultado[1] == "J"){
                zonab.src="J.png";
              }else if(inte.resultado[1] == "Q"){
                zonab.src="Q.png";
              }else if(inte.resultado[1] == "K"){
                zonab.src="K.png";
              }else if(inte.resultado[1] == "A"){
                zonab.src="A.png";
              }
              contador2=0;
            }
          
        },100);

    }
    if(nu === 2){
        var intervalo= setInterval(() =>{ 
        contador++
        var Index= Math.floor(Math.random()*array.length)
        zonac.src=array[Index];
        if(contador>=15){
          clearInterval(intervalo);
          if(inte.resultado[0] == "J"){
            zonac.src="J.png";
          }else if(inte.resultado[0] == "Q"){
            zonac.src="Q.png";
          }else if(inte.resultado[0] == "K"){
            zonac.src="K.png";
          }else if(inte.resultado[0] == "A"){
            zonac.src="A.png";
          }
          contador=0;
        }
      
        },100);
        var intervalo2= setInterval(() =>{ 
        contador2++
        var Index2= Math.floor(Math.random()*array.length)
        zonad.src=array[Index2];
        if(contador2>=20){
              clearInterval(intervalo2);
              if(inte.resultado[1] == "J"){
                zonad.src="J.png";
              }else if(inte.resultado[1] == "Q"){
                zonad.src="Q.png";
              }else if(inte.resultado[1] == "K"){
                zonad.src="K.png";
              }else if(inte.resultado[1] == "A"){
                zonad.src="A.png";
              }
              contador2=0;
            }
          
        },100);


    }
    
  }
  function moverLetra(apt,nu){
    if(nu==1){
      inte= apostarYJugar(maquinas['maquinaA'],apt)
      calculo(inte,nu)
      gananciaa=parseInt(inte.ganancia)
      setTimeout(() => {
        if(gananciaa == 0){
          botona.disabled=false;
          botona.classList.replace("bg-gray-400", "bg-blue-500");
          sonidoWin(false);
        }
        if(gananciaa != 0){
          lina.classList.replace('text-black','text-white')
          botona.classList.add("hidden")
          cobrara.classList.toggle("hidden")
          sonidoWin(true);
        }  
      }, 2000);
    }
    if(nu==2){
      inte = apostarYJugar(maquinas['maquinaB'],apt)
      calculo(inte,nu)
      gananciab=parseInt(inte.ganancia);
      setTimeout(() => {
        if(gananciab == 0){
          botonb.disabled=false;
          botonb.classList.replace("bg-gray-400", "bg-pink-500");
          sonidoWin(false);
        }
        if(gananciab != 0){
          linb.classList.replace('text-black','text-white')
          botonb.classList.add("hidden")
          cobrarb.classList.toggle("hidden")
          sonidoWin(true);
        }
      } ,2000);
      
    }
  }
  function cobrar(gananciaa,gananciab,apt,nu){
    if(nu==1){
      increaseCoins(gananciaa*apt);
      botona.classList.remove("hidden")
      botona.classList.replace("bg-gray-400","bg-blue-500");
      botona.disabled=false;
      cobrara.classList.toggle("hidden")
      lina.classList.replace('text-white','text-black')
    }
    
    if(nu==2){
      increaseCoins(gananciab*apt);
      botonb.classList.remove("hidden")
      botonb.classList.replace("bg-gray-400","bg-pink-500");
      botonb.disabled=false;
      cobrarb.classList.toggle("hidden")
      linb.classList.replace('text-white','text-black')
    }
  }
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
  const sonidoWin = (play) => {
    const aud = viewElement.querySelector('#sonido2');
    try {
      if (play) {
        aud.volume = 0.4;
        aud.loop = true;
        aud.play();
      } else {
        aud.pause();
      }
    } catch { }
  }

  const modoFiesta = (num) => {
    viewElement.querySelector('#maquina'.concat(num)).style.animation = "anima 3s linear infinite";
  }
  const modonoFiesta = (num) => {
    viewElement.querySelector('#maquina'.concat(num)).style.animation = "";
  }

  viewElement.querySelector('#aumentar1').addEventListener('click', () => aumentarMonedas(1));
  viewElement.querySelector('#disminuir1').addEventListener('click', () => disminuirMonedas(1));
  viewElement.querySelector('#aumentar2').addEventListener('click', () => aumentarMonedas(2));
  viewElement.querySelector('#disminuir2').addEventListener('click', () => disminuirMonedas(2));
  viewElement.querySelector('#cantidad-maq-1').addEventListener('change', () => revisar);
  viewElement.querySelector('#cantidad-maq-2').addEventListener('change', () => revisar);
  viewElement.querySelector('#cantidad-maq-1').addEventListener('keypress', () => soloNumeros);
  viewElement.querySelector('#cantidad-maq-2').addEventListener('keypress', () => soloNumeros);
  viewElement.querySelector('#jugar1').addEventListener('click', () => oprimirapostar(1));
  viewElement.querySelector('#jugar2').addEventListener('click', () => oprimirapostar(2));
  viewElement.querySelector('#jugar4').addEventListener('click', () => cobrar(gananciaa, gananciab, apt, 1));
  viewElement.querySelector('#jugar3').addEventListener('click', () => cobrar(gananciaa, gananciab, apt, 2));
  viewElement.querySelector('#jugar1').addEventListener('click', sonidoBoton);
  viewElement.querySelector('#jugar2').addEventListener('click', sonidoBoton);

  viewElement.querySelector('#maq_celeste_Mov').addEventListener('mouseenter', () => modoFiesta(1))
  viewElement.querySelector('#maq_celeste_Mov').addEventListener('mouseleave', () => modonoFiesta(1))
  viewElement.querySelector('#maq_rosa_Mov').addEventListener('mouseenter', () => modoFiesta(2))
  viewElement.querySelector('#maq_rosa_Mov').addEventListener('mouseleave', () => modonoFiesta(2))

};



export default GameView;

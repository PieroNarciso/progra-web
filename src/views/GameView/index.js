import store from '../../store'
import  * as pokemon from '../../utils/tragamonedas';
const GameView = () => {
  return /*html*/`

    <div class="nomMaquina1">
      <h3 class="text-white">YOUR FORTUNE</h3>
    </div>

    <div class="nomMaquina2">
      <h3 class=>CRAZY MACHINE</h3>
    </div>

    <div class="flex flex-wrap h-full">
      <div class="flex w-full h-1/2 items-center border-black border-4 justify-center">
        <img class="h-4/5" src="maq-celeste.png">
        <div class="text-center" id="centrarlin1">
          <p id="lin1" class="text-center hidden"> Ganaste </p>
        </div>
        <div class="content-center" id="imagen1-4">
          <img class="w-15" src="A.png" id="letra1">
        </div>
        <div class="content-center" id="imagen1-2">
          <img class="w-15" src="A.png" id="letra1-1">
        </div>
        <div id="centrardiv" class="">
          <input id ='cantidad-maq-1' class="text-black w-16 h-10 border-blue-500 bg-white rounded-md border-2" type="text" value="10">
          <button id ='jugar1' class="rounded-md bg-blue-500 text-white"><b>Apostar</b></button>
          <button id ='jugar4' class="rounded-md bg-blue-500 text-white hidden"><b>Cobrar</b></button>
          <button id="aumentar1" class="transform rotate-180 bg-blue-500 text-xs"><b>v</b></button>
          <button id="disminuir1" class="bg-blue-500 text-xs"><b>v</b></button>
        </div>
        <div id="imgePirata" class="">
          <img class=" h-10" src="pirata.png">
        </div>
      </div>
      <div class="flex justify-center items-center w-full h-1/2 border-black border-4">
        <img class="h-4/5" src="maq-rosa.png" >
        <div class="text-center" id="centrarlin2">
          <p id="lin2" class="text-center hidden"> Ganaste </p>
        </div>
        <div class="content-center" id="imagen2-4">
          <img class="w-15" src="A.png" id="letra2">
        </div>
        <div class="content-center" id="imagen2-2">
          <img class="w-15" src="A.png" id="letra2-1">
        </div>
        <div id="centrardiv2" class="">
          <input id ='cantidad-maq-2' class="text-black w-16 h-10 border-pink-500 bg-white rounded-md border-2" type="text" value="10">
          <button id ='jugar2' class="rounded-md bg-pink-500 text-white"><b>Apostar</b></button>
          <button id ='jugar3' class="rounded-md bg-pink-500 text-white hidden"><b>Cobrar</b></button>
          <button id="aumentar2" class="transform rotate-180 bg-pink-500 text-xs"><b>v</b></button>
          <button id="disminuir2" class="bg-pink-500 text-xs"><b>v</b></button>
        </div>
        <div id="imgeEgip" class="">
          <img class=" h-11" src="Egipto.png">
        </div>
      </div>
    </div>
    
    <!--
      <div class="pr-56">
        <p class="absolute"> Cantidad a apostar: </p>
        <input id="cantidad-maq-2" class="text-black absolute mt-8 py-2 px-4 w-16 h-10 border-pink-500 bg-white rounded-md border-2" type="text" value="10">
        <button class="absolute mt-8 ml-32 py-2 px-4 rounded-md bg-pink-500"><b>Apostar</b></button>
        <button id="aumentar2" class="transform rotate-180 absolute mt-8 ml-20 px-2 bg-pink-500 text-xs"><b>v</b></button>
        <button id="disminuir2" class="absolute mt-14 ml-20 px-2 bg-pink-500 text-xs"><b>v</b></button>
      </div>
    </div> -->

    
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
  const { user } = store.getStore()
  const bloquearBotones = (tipo, nro) => {
    try {
      if (tipo == 0) {
        if (nro == 1) {
          viewElement.querySelector('#aumentar1').classList.replace('bg-gray-400', 'bg-blue-500');
          viewElement.querySelector('#aumentar1').disabled = false;
          viewElement.querySelector('#disminuir1').classList.replace('bg-gray-400', 'bg-blue-500');
          viewElement.querySelector('#disminuir1').disabled = false;
        } else if (nro == 2) {
          viewElement.querySelector('#aumentar2').classList.replace('bg-gray-400', 'bg-pink-500');
          viewElement.querySelector('#aumentar2').disabled = false;
          viewElement.querySelector('#disminuir2').classList.replace('bg-gray-400', 'bg-pink-500');
          viewElement.querySelector('#disminuir2').disabled = false;
        }
      }
      else if (tipo == 3){
        if (nro == 1) {
          
        }
      }
      else {
        if (tipo == 1) {
          if (nro == 1) {
            var btn = viewElement.querySelector('#aumentar1');
            btn.classList.remove('bg-blue-500');
          } else if (nro == 2) {
            var btn = viewElement.querySelector('#aumentar2');
            btn.classList.remove('bg-pink-500');
          }
        }
        else if (tipo == 2) {
          if (nro == 1) {
            var btn = viewElement.querySelector('#disminuir1');
            btn.classList.remove('bg-blue-500');
          } else if (nro == 2) {
            var btn = viewElement.querySelector('#disminuir2');
            btn.classList.remove('bg-pink-500');
          }
        }
        btn.classList.add('bg-gray-400')
        btn.disabled = true;
      }
    } catch { }
  }

  const revisar = (num) => {
    const inputTxt = viewElement.querySelector('#cantidad-maq-'.concat(num));

    if (inputTxt.value >= user.coins) {
      if(inputTxt1.value > user.coins) bloquearBotones(3,1)
      bloquearBotones(1, 1);
    }
    if (inputTxt2.value >= user.coins) {
      bloquearBotones(1, 2);
      console.log('h')
    }
    if (inputTxt1.value <= 0) {
      bloquearBotones(2, 1);
    }
    if (inputTxt2.value <= 0) {
      bloquearBotones(2, 2);
    }
    if (inputTxt1.value > 0 && inputTxt1.value < user.coins) {
      bloquearBotones(0,1);
    }
    if (inputTxt2.value > 0 && inputTxt2.value < user.coins) {
      bloquearBotones(0, 2);
    }
  }

  const aumentarMonedas = (num) => {
    const nuevoMonto = parseInt(viewElement.querySelector('#cantidad-maq-'.concat(num)).value) + 10;
    if (user.coins >= nuevoMonto) {
      viewElement.querySelector('#cantidad-maq-' + num).value = nuevoMonto
      if (nuevoMonto >= user.coins) bloquearBotones(1, num);
      else bloquearBotones(0, num);
    }
  }

  const disminuirMonedas = (num) => {
    const nuevoMonto = parseInt(viewElement.querySelector('#cantidad-maq-'.concat(num)).value) - 10;
    if (nuevoMonto >= 0) {
      viewElement.querySelector('#cantidad-maq-' + num).value = nuevoMonto
      if (0 >= nuevoMonto) bloquearBotones(2, num);
      else bloquearBotones(0, num);
    }
  }

  const owo = (nu) =>{
    const inputTxt1 = viewElement.querySelector("#cantidad-maq-".concat(nu));
    if( user.coins> inputTxt1.value){
      var apt = parseInt(inputTxt1.value);
      user.coins=user.coins - apt;
      moverLetra(apt,nu)
    }

  }


  let gananciaa=0;
  let gananciab=0;
  let apt=0;
  let inte= {};
  viewElement.querySelector('#aumentar1').addEventListener('click', () => aumentarMonedas(1));
  viewElement.querySelector('#disminuir1').addEventListener('click', () => disminuirMonedas(1));
  viewElement.querySelector('#aumentar2').addEventListener('click', () => aumentarMonedas(2));
  viewElement.querySelector('#disminuir2').addEventListener('click', () => disminuirMonedas(2));
  viewElement.querySelector('#cantidad-maq-1').addEventListener('change', () => revisar);
  viewElement.querySelector('#cantidad-maq-2').addEventListener('change', () => revisar);
  viewElement.querySelector('#jugar1').addEventListener('click', () => owo(1));
  viewElement.querySelector('#jugar2').addEventListener('click', () => owo(2));
  viewElement.querySelector('#jugar4').addEventListener('click', ()=> cobrar(inte.ganancia,apt,1));
  viewElement.querySelector('#jugar3').addEventListener('click', ()=> cobrar(inte.ganancia,apt,2));

  let contador=0;
  let contador2=0;
  let botona= viewElement.querySelector("#jugar1");
  let botonb= viewElement.querySelector("#jugar2");
  let cobrara= viewElement.querySelector("#jugar4");
  let cobrarb= viewElement.querySelector("#jugar3");

  let lina=viewElement.querySelector("#lin1")
  let linb=viewElement.querySelector("#lin2")
  let zona = viewElement.querySelector("#letra1");
  let zonab= viewElement.querySelector("#letra1-1")
  let zonac=viewElement.querySelector("#letra2");
  let zonad=viewElement.querySelector("#letra2-1");
  var array=["J.png","A.png","K.png"]
  let vez= 1;
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
        console.log(contador2, inte.resultado);
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
        console.log(contador2, inte.resultado);
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
      inte= pokemon.apostarYJugar("maquinaA[maquinaA]",apt)
      calculo(inte,nu)
      gananciaa=parseInt(inte.ganancia)
      setTimeout(() => {
        if(gananciaa == 0){
  
        }
        if(gananciaa != 0){
          lina.classList.toggle("hidden")
          botona.classList.add("hidden")
          cobrara.classList.toggle("hidden")
          
          
        }  
      
      }, 2000);
      
      
    }
    if(nu==2){
      inte= pokemon.apostarYJugar("maquinaB[maquinaB]",apt)
      calculo(inte,nu)
      gananciab=parseInt(inte.ganancia);
      setTimeout(() => {
        if(gananciab == 0){

        }
        if(gananciab != 0){
          linb.classList.toggle("hidden")
          botonb.classList.add("hidden")
          cobrarb.classList.toggle("hidden")
          
        }
      } ,2000);
      
    }
  }
  function cobrar(ganancia,apt,nu){
    user.coins+=ganancia*apt;
    if(nu==1){
      botona.classList.remove("hidden")
      cobrara.classList.toggle("hidden")
      lina.classList.toggle("hidden")
    }
    
    if(nu==2){
      botonb.classList.remove("hidden")
      cobrarb.classList.toggle("hidden")
      linb.classList.toggle("hidden")
    }
  }

}



export default GameView;

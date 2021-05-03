const GameView = () => {
  return /*html*/`
    <div class="nomMaquina1 text-white">
      <h3 class>YOUR FORTUNE</h3>
    </div>
    </div>
    <div class="nomMaquina2 text-white">
      <h3 class=>CRAZY MACHINE</h3>
    </div>
    <div class="w-full h-64 text-white absolute mt-36 flex justify-evenly">
      <img class="h-full" src="/public/maq-celeste.png">
      <img class="h-full" src="/public/maq-rosa.png" >
    </div>
    <div class="w-full h-32 text-white absolute mt-96 pt-4 flex justify-evenly">
      <div class="pr-56">
        <p class="absolute"> Cantidad a apostar: </p>
        <input id ='cantidad-maq-1' class="text-black absolute mt-8 py-2 px-4 w-16 h-10 border-blue-400 bg-white rounded-md border-2" type="text" value="10">
        <button class="absolute mt-8 ml-32 py-2 px-4 rounded-md bg-blue-400""><b>Jugar</b></button>
        <button id="aumentar1" class="btaumentar absolute mt-8 ml-20 px-2 bg-blue-400 text-xs" onclick="aumentarMonedas()"><b>v</b></button>
        <button class="absolute mt-14 ml-20 px-2 bg-blue-400 text-xs"><b>v</b></button>
      </div>
      <div class="pr-56">
        <p class="absolute"> Cantidad a apostar: </p>
        <input class="text-black absolute mt-8 py-2 px-4 w-16 h-10 border-pink-500 bg-white rounded-md border-2" type="text" value="10">
        <button class="absolute mt-8 ml-32 py-2 px-4 rounded-md bg-pink-500"><b>Jugar</b></button>
        <button class="btaumentar absolute mt-8 ml-20 px-2 bg-pink-500 text-xs"><b>v</b></button>
        <button class="absolute mt-14 ml-20 px-2 bg-pink-500 text-xs"><b>v</b></button>
      </div>
    </div> 

    <!--
    <div class="monedas">
      <div class="moneda_img"><img src="/moneda.png" /></div>
      <div class="moneda_img"><img src="/moneda.png" /></div>
      <div class="moneda_img"><img src="/moneda.png" /></div>
      <div class="moneda_img"><img src="/moneda.png" /></div>
      <div class="moneda_img"><img src="/moneda.png" /></div>
      <div class="moneda_img"><img src="/moneda.png" /></div>
      <div class="moneda_img"><img src="/moneda.png" /></div>
    </div>-->
  `;
};

/**
  * @param {HTMLDivElement} viewElement
  */
export const GameViewEvents = (viewElement) => {
  const aumentarMonedas = () => {
    //viewElement.querySelector('#cantidad-maq-1').innerHTML = viewElement.querySelector('#cantidad-maq-1').value + 10
    console.log("a")
  }
  viewElement.querySelector('#aumentar1').addEventListener('click', aumentarMonedas);
}

export default GameView;

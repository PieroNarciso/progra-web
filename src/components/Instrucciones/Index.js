

const InstruccionesView = () =>{  return/*html*/ `
    
<body class="bg-gray-500">
  <button class="px-6 py-3 bg-red-600 text-gray-100 rounded shadow" id="aceptarbg">
  Aceptar
  </button>
  <div class="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center" id="overlay">
    <div class="bg-gray-200 rounded shadow-xl py-1 px-4 mx-5">
      <div class="flex justify-between items-center">
        <h4 class="text-lg font-bold">Instrucciones </h4>
        <svg class="w-5 h-6 cursor-pointer hover:bg-gray-300" id="closemodal" 
        fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

        
        </div>
        <div class="mt-2 text-sm">
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5  my-auto">
        <!--Card 1-->
        <div class="rounded overflow-hidden shadow-lg">

        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">1° Paso</div>
          <p class="text-gray-700 text-base">
              Introduce la cantidad a apostar
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">

        </div>
      </div>
      <!--Card 2-->

      <div class="rounded overflow-hidden shadow-lg ">

      <div class="px-5 py-4">
        <div class="font-bold text-xl mb-2">2° Paso 
        </div>
        <p class="text-gray-700 text-base text-justify">
        Cuando se apuesta a una dame  máquina, ella responde con 2 letras. Las letras posibles son: J, Q, K, A. 
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">

      </div>
    </div>
        <!--Card 3-->
        <div class= "container mx-auto top-10">
    <div class="rounded overflow-hidden shadow-lg">

      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">3° Paso</div>
        <p class="text-gray-700 text-base">
        Si sale JJ, la duplicas lo apostado, si es QQ es el triple, si es KK  es diez veces lo apostado. Si sale cualquier otra combinación se pierde lo apostado.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">

      </div>
    </div>
    </div>
    </div>

      
      <!--Fin-->
    </div>
    <div class="mt-3 flex justify-end">
      <button class="px-3 py-1 rounded bg-red-500 text-gray-200
      hover:bg-red-400 hover:text-white" id="Aceptar"> Aceptar </button>
    </div>
  </div>
  </body>
`;}
window.addEventListener("load",()=>{
  const overlay = document.querySelector('#overlay')
  const aceptarbg = document.querySelector('#aceptarbg')
  const close=document.querySelector('#closemodal')
  const Aceptar=document.querySelector("#Aceptar")
  const Aparecer = () =>{
    overlay.classList.toggle("flex")
    overlay.classList.toggle("hidden")
  }
  aceptarbg.addEventListener('click',() =>{
    Aparecer();

  })
  close.addEventListener('click',() =>{
    Aparecer();

  })
  Aceptar.addEventListener('click',() => {
    Aparecer();
  })

})

export default InstruccionesView;
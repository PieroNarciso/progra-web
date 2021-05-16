const Instrucciones = () => {
  const template = /*html*/`
    <div
      class="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center z-30"
    >
      <div
        class="bg-gray-100 rounded shadow-xl py-1 px-4 border-black border-4"
      >
        <div class="flex justify-between items-center">
          <h4 class="text-lg font-bold">Instrucciones</h4>
          <svg
            class="w-5 h-4 cursor-pointer hover:bg-gray-300"
            id="closemodal"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div class="mt-0 ml-0 text-sm">
          <div
            class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2  my-auto pt-0 lg:pt-10 gs5:grid-cols-3 gs5:p-10 gs5:-mt-12 gs5:text-sm"
          >
            <!--Card 1-->
            <div class="rounded overflow-hidden shadow-lg">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 gs5:pt-10">1° Paso</div>
                <p class="text-gray-700 text-base gs5:pt-3 gs5:text-sm">
                  Introduce la cantidad a apostar
                </p>
              </div>
              <div class="px-6 pt-4 pb-2 gs5:px-0 gs5:pt-0 gs5:pb-0"></div>
            </div>
            <!--Card 2-->

            <div class="rounded overflow-hidden shadow-lg ">
              <div class="px-5 py-4">
                <div class="font-bold text-xl mb-2 gs5:pt-10 ">2° Paso</div>
                <p class="text-gray-700 text-base text-justify gs5:text-sm">
                  Cuando se apuesta a una dame máquina, ella responde con 2
                  letras.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2"></div>
            </div>
            <!--Card 3-->
            <div class="container mx-auto top-10 gs5:pt-10">
              <div class="rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">3° Paso</div>
                  <p class="text-gray-700 text-base gs5:text-sm">
                    Si sale JJ, se duplica, si es QQ se triplica, si es KK es
                    diez veces lo apostado. Si sale cualquier otra combinación
                    se pierde lo apostado.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!--Fin-->
        </div>
        <div class="-mt-5 flex justify-center">
          <button
            class="px-3 py-1 rounded bg-red-500 text-gray-200
        hover:bg-red-400 hover:text-white"
            id="Aceptar"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  `;

  const instruccionesContainer = document.createElement('div');
  instruccionesContainer.innerHTML = template;

  const closeBtn = instruccionesContainer.querySelector('#closemodal');
  const aceptarBtn = instruccionesContainer.querySelector('#Aceptar');

  closeBtn.addEventListener('click', () => {
    instruccionesContainer.remove();
  });
  aceptarBtn.addEventListener('click', () => {
    instruccionesContainer.remove();
  });

  return instruccionesContainer;
};


export default Instrucciones;

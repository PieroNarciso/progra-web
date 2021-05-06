
const template = /*html*/`
  <div class= "mx-auto my-auto">
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

    <div class= "mx-auto my-auto">
    <div class="rounded overflow-hidden shadow-lg ">

      <div class="px-6 py-4 mx-auto my-auto">
        <div class="font-bold text-xl mb-2">2° Paso </div>
        <p class="text-gray-700 text-base text-justify">
        Cuando se apuesta a una dame  máquina, ella responde con 2 letras. Las letras posibles son: J, Q, K, A. 
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">

      </div>
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
  <div>
    <button class="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded block mx-auto" type="button">
          Cerrar
    </button>

  </div>
</div>
`;

export default () => {

  const instru = document.createElement('div');
  instru.innerHTML = template;

  return instru;
};
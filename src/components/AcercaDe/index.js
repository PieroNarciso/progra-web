import AcercaDeItem from '../AcercaDeItem';

const AcercaDe = () => {
  const devs = [
    {
      name: 'Piero Narciso Ancalle',
      yearsOld: 23,
      imgSrc: 'https://picsum.photos/200',
    },
    {
      name: 'Sebastian Felix Bañón',
      yearsOld: 19,
      imgSrc: 'https://picsum.photos/200',
    },
    {
      name: 'Maricielo Jara Sosa',
      yearsOld: 20,
      imgSrc: 'https://picsum.photos/200',
    },
    {
      name: 'Alessandra Nuñez Aguero',
      yearsOld: 20,
      imgSrc: 'https://picsum.photos/200',
    },
  ];

  const template = `
    <div class="bg-black absolute top-0 left-0 w-screen h-screen bg-opacity-30 flex items-center justify-center">
      <div class="overflow-hidden inline-flex flex-col rounded-xl shadow-md">
        <div class="text-white bg-primary px-3 py-2 text-lg font-semibold">
          Acerca De
        </div>
        <div>
          ${devs
            .map((dev, idx) => {
              return AcercaDeItem({ ...dev, id: idx });
            })
            .join('')}
        </div>
        <div class="flex justify-end px-3 py-1 border-t-2 border-primary bg-white">
          <button class="btn btn-secondary w-auto" id="close-acerca-de">Cerrar</button>
        </div>
      </div>
    </div>
  `;

  const containerDiv = document.createElement('div');

  containerDiv.innerHTML = template;

  containerDiv
    .querySelector('#close-acerca-de')
    .addEventListener('click', () => {
      containerDiv.remove();
    });
  return containerDiv;
};

export default AcercaDe;

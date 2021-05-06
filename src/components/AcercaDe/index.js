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

  return `
    <div class="overflow-hidden inline-flex flex-col rounded-xl shadow-md">
      <div class="text-white bg-primary px-3 py-2 text-lg font-semibold">Acerca De</div>
      <div>
    ${devs
      .map((dev, idx) => {
        return AcercaDeItem({ ...dev, id: idx });
      })
      .join('')}
      </div>
      <div class="flex justify-end px-3 py-1 border-t-2 border-primary">
        <button class="btn btn-secondary w-auto">Cerrar</button>
      </div>
    </div>
  `;
};

export default AcercaDe;

/**
 * @typedef {Object} Props
 * @property {string} name
 * @property {number} yearsOld
 * @property {number} id
 *
 * @param {Props} props
 */
const AcercaDeItem = ({ name, yearsOld, imgSrc, id }) => {
  const containerCls =
    id % 2 === 0
      ? 'bg-primary-darker text-white'
      : 'bg-gray-300 text-primary-darker';

  return `
    <div class="flex font-medium ${containerCls}">
      <div class="overflow-hidden flex items-center justify-center px-2 py-2">
        <img class="h-20 w-20 rounded-full inset-0 object-cover object-center" src=${imgSrc} />
      </div>
      <div class="w-full flex flex-col justify-center items-center">
        <h1>${name}</h1>
        <span>${yearsOld} años</span>
      </div>
    </div>
  `;
};

export default AcercaDeItem;

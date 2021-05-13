/**
 * @typedef {Object} Props
 * @property {string} username
 * @property {number} ganacias
 * @property {number} promedio
 * @property {number} apuestas
 * @property {number} rank
 *
 * @param {Props} props
 */
const RankingItem = ({ username, ganacias, promedio, apuestas, rank }) => {
  return `
    <div class="flex gap-x-4">
      <div class="text-center my-auto">
        <span>N ${rank} ${username}</span>
      </div>
      <div class="flex flex-col items-center justify-center">
        <div class="w-full">
          Ganacias: ${ganacias}
          <svg class="ml-1 h-6 w-6 text-yellow-400 inline-block" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M15 4A8 8 0 1 1 7 12A8 8 0 0 1 15 4M3 12A6 6 0 0 0 7 17.65V19.74A8 8 0 0 1 7 4.26V6.35A6 6 0 0 0 3 12Z"
            />
          </svg>
        </div>
        <div class="">
          Promedio: ${promedio}
          <svg class="ml-1 h-6 w-6 text-yellow-400 inline-block" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M15 4A8 8 0 1 1 7 12A8 8 0 0 1 15 4M3 12A6 6 0 0 0 7 17.65V19.74A8 8 0 0 1 7 4.26V6.35A6 6 0 0 0 3 12Z"
            />
          </svg>
        </div>
        <div class="">
          Apuestas: ${apuestas}
          <svg class="ml-1 h-6 w-6 text-yellow-400 inline-block" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M15 4A8 8 0 1 1 7 12A8 8 0 0 1 15 4M3 12A6 6 0 0 0 7 17.65V19.74A8 8 0 0 1 7 4.26V6.35A6 6 0 0 0 3 12Z"
            />
          </svg>
        </div>
      </div>
    </div>
  `;
};

const RankingView = () => {
  const rankingList = [
    { username: 'Leon', ganacias: 40, apuestas: 20, promedio: 10 },
    { username: 'Leon', ganacias: 40, apuestas: 20, promedio: 10 },
    { username: 'Leon', ganacias: 40, apuestas: 20, promedio: 10 },
    { username: 'Leon', ganacias: 40, apuestas: 20, promedio: 10 },
    { username: 'Leon', ganacias: 40, apuestas: 20, promedio: 10 },
    { username: 'Leon', ganacias: 40, apuestas: 20, promedio: 10 },
    { username: 'Leon', ganacias: 40, apuestas: 20, promedio: 10 },
    { username: 'Leon', ganacias: 40, apuestas: 20, promedio: 10 },
    { username: 'Leon', ganacias: 40, apuestas: 20, promedio: 10 },
    { username: 'Leon', ganacias: 40, apuestas: 20, promedio: 10 },
    { username: 'Leon', ganacias: 40, apuestas: 20, promedio: 10 },
  ];

  const template = `
    <div
      class="absolute top-0 left-0 bg-black bg-opacity-30 w-screen h-screen flex items-center justify-center"
    >
      <div class="bg-white flex flex-col shadow-md rounded-lg h-4/5 w-auto z-50">
      <div class="overflow-auto flex flex-col px-2 py-2 gap-y-3">
        ${rankingList
          .map((item, index) => RankingItem({ ...item, rank: index + 1 }))
          .join('')}
      </div>
      <div class="px-2 py-2 border-t-2 border-gray-300">
        <button class="btn btn-secondary" id="close-component">Close</button>
      </div>
    </div>
  `;

  const containerDiv = document.createElement('div');
  containerDiv.innerHTML = template;
  containerDiv
    .querySelector('#close-component')
    .addEventListener('click', () => {
      containerDiv.remove();
    });

  return containerDiv;
};

export default RankingView;

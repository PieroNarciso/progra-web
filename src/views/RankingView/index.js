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
    <div class="flex px-2 py-2">
      <div class="flex items-center justify-center block">
        <span>N ${rank} ${username}</span>
      </div>
      <ul class="ml-6 flex flex-col items-center w-full block">
        <li class="">
          Ganacias: ${ganacias}
          <svg class="inline-block w-6 h-6 text-yellow-400 ml-2" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M15 4A8 8 0 1 1 7 12A8 8 0 0 1 15 4M3 12A6 6 0 0 0 7 17.65V19.74A8 8 0 0 1 7 4.26V6.35A6 6 0 0 0 3 12Z"
            />
          </svg>
        </li>
        <li class="">
          Promedio: ${promedio}
          <svg class="ml-2 inline-block w-6 h-6 text-yellow-400" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M15 4A8 8 0 1 1 7 12A8 8 0 0 1 15 4M3 12A6 6 0 0 0 7 17.65V19.74A8 8 0 0 1 7 4.26V6.35A6 6 0 0 0 3 12Z"
            />
          </svg>
        </li>
        <li class="">
          Apuestas: ${apuestas}
          <svg class="ml-2 inline-block w-6 h-6 text-yellow-400" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M15 4A8 8 0 1 1 7 12A8 8 0 0 1 15 4M3 12A6 6 0 0 0 7 17.65V19.74A8 8 0 0 1 7 4.26V6.35A6 6 0 0 0 3 12Z"
            />
          </svg>
        </li>
      </ul>
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

  return `
    <div class="rounded-lg border-2 border-gray-300 shadow-md flex-col flex">
      <div class="overflow-auto text-primary-darker border-b-2 border-gray-300">
        ${rankingList
          .map((item, index) =>
            RankingItem({
              username: item.username,
              ganacias: item.ganacias,
              promedio: item.promedio,
              apuestas: item.apuestas,
              rank: index + 1,
            })
          )
          .join('')}
      </div>
      <div class="px-2 py-2">
        <button class="btn btn-secondary">Close</button>
      </div>
    </div>
  `;
};

export default RankingView;

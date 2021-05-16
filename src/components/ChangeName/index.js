import store from '../../store';

/**
  * @typedef {Object} Props
  * @property {string} username
  *
  * @param {Props} props
  */
const ChangeName = () => {
  const state = store.getStore();

  const template = `
    <div class="absolute top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-20 z-50">
      <form id="change-name-form" class="shadow-md px-4 py-3 flex flex-col bg-white rounded-md">
        <div>
          <label class="">
            <span class="block text-gray-700">Username</span>
            <input class="mt-1 input-text w-full" id="user-input" type="text" placeholder="Username" value="${state.user.username}"/>
          </label>
        </div>
        <div class="flex justify-end mt-4">
          <button class="btn btn-secondary w-auto mr-2" id="close-change-name">Cancelar</button>
          <button type="submit" class="btn btn-primary w-auto">Cambiar</button>
        </div>
      </form> 
    </div>
  `;

  const containerElement = document.createElement('div');
  containerElement.innerHTML = template;

  /**
    * @param {Event} event
    */
  const changeName = (event) => {
    event.preventDefault();
    const username = containerElement.querySelector('#user-input').value;
    state.changeUsername(username);
    document.querySelector('#header-title').textContent = state.user.username;
    document.querySelector('#coins-val').textContent = state.user.coins.toFixed(2);
    document.querySelector('#ganancia-val').textContent = state.user.acumGanancia.toFixed(2);
    containerElement.remove();
  }

  containerElement.querySelector('#close-change-name').addEventListener('click', () => {
    containerElement.remove();
  });

  containerElement.querySelector('#change-name-form').addEventListener('submit', changeName);

  return containerElement;
};

export default ChangeName;

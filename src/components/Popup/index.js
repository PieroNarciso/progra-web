import store from '../../store';

/**
  * @typedef {Object} Props
  * @property {string} username
  *
  * @param {Props} props
  */
const Popup = ({ username }) => {

  return /*html*/`
    <div
      class="bg-white rounded-md shadow-md px-4 py-3 border-primary border-2 mx-4"
    >
      <form id="popup-form" class="flex flex-col">
        <label for="username" class="w-full">
          <span class="block text-gray-700 font-medium">Username</span>
          <input
            class="input-text w-full mt-1"
            type="text"
            id="username-input"
            name="username"
            value="${username}"
          />
        </label>
        <div class="mx-8">
          <img class="mt-4" src="/tragamoneda.png" alt="" />
        </div>

        <div class="flex justify-end mt-4">
          <button class="btn btn-primary" type="submit">Aceptar</button>
        </div>
      </form>
    </div>
  `;
};

/**
  * @param {HTMLDivElement} viewElement
  */
export const PopupEvents = (viewElement) => {
  /**
    * @param {Event} event
    */
  const joinGame = (event) => {
    event.preventDefault();
    const inputValue = viewElement.querySelector('#username-input').value;
    document.querySelector('#header-title').textContent = inputValue;
    document.querySelector('#lapiz').classList.remove('hidden');
    store.store.changeUsername(inputValue);
    localStorage.setItem('firstTime', true);
    window.location.hash = '#/';
  }
  viewElement.querySelector('#username-input').select();
  viewElement.querySelector('#popup-form').addEventListener('submit', joinGame);
}

export default Popup;

import store from '../../store';

/**
  * @typedef {Object} Props
  * @property {string} username
  *
  * @param {Props} props
  */
const ChangeName = () => {
  const { username } = store.getStore().user;

  const template = `
    <div class="absolute top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-20">
      <form id="change-name-form" class="shadow-md px-4 py-3 flex flex-col bg-white rounded-md">
        <div>
          <label class="">
            <span class="block text-gray-700">Username</span>
            <input class="mt-1 input-text w-full" id="user-input" type="text" placeholder="Username" value="${username}"/>
          </label>
        </div>
        <div class="flex justify-end mt-4">
          <button class="btn btn-primary w-auto">Change</button>
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
    const state = store.getStore();
    state.changeUsername(username);
    document.querySelector('#header-title').textContent = username;
    containerElement.remove();
  }

  containerElement.querySelector('#change-name-form').addEventListener('submit', changeName);

  return containerElement;
};

export default ChangeName;

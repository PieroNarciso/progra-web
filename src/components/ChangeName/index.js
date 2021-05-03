/**
  * @typedef {Object} Props
  * @property {string} username
  *
  * @param {Props} props
  */
const ChangeName = ({ username }) => {
  return `
    <div class="">
      <form id="change-name-form" class="shadow-md px-4 py-3 flex flex-col">
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
};

export default ChangeName;

/**
  * @param {HTMLDivElement} element
  */
export const ChangeNameEvents = (element) => {
  
  /**
    * @param {Event} event
    */
  const changeName = (event) => {
    event.preventDefault();
    const username = element.querySelector('#user-input').value;
    console.log(username);
  }

  element.querySelector('#change-name-form').addEventListener('submit', changeName);
}

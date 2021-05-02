const template = `
  <div
    class="bg-white rounded-md shadow-md px-4 py-3 border-primary border-2 mx-4"
  >
    <form class="">
      <label for="username" class="w-full">
        <span class="block text-gray-700 font-medium">Username</span>
        <input
          class="input-text w-full mt-1"
          type="text"
          id="username-input"
          name="username"
          value="Leon"
        />
      </label>
      <div class="mx-8">
        <img class="mt-4" src="public/tragamoneda.png" alt="" />
      </div>

      <div class="flex justify-end mt-4">
        <button class="btn btn-secondary" type="submit">Close</button>
        <button class="btn btn-primary ml-2" type="submit">Join Game</button>
      </div>
    </form>
  </div>
`;

export default () => {
  const joinGame = (e) => {
    e.preventDefault();
    const inputValue = popupEl.querySelector('input').value;
    popupEl.classList.add('hidden');
  }

  const popupEl = document.createElement('div'); 
  popupEl.className = 'absolute h-screen w-screen flex items-center justify-center';

  popupEl.innerHTML = template;

  popupEl.querySelector('form').addEventListener('submit', joinGame);

  return popupEl;
}

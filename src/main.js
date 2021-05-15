import './styles.css';
import './assets/style.css';
import App from './App.js';
import store from './store';
import { State } from './models/state';
import { User } from './models/user';



const isLoaded = store.load();
if (!isLoaded) {
  store.create(new State({
    user: new User(),
    users: [],
    music: true,
  }));
} else {
  
}


document.addEventListener('DOMContentLoaded', () => {
  App();
});




window.onbeforeunload = () => {
  store.save();
}


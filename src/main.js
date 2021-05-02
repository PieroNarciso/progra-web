import './styles.css';

import Navbar from './components/Navbar';
import Popup from './components/Popup';
import MainPage from './views/MainPage';


// NavBar
document.querySelector('#navbar').replaceWith(Navbar());

document.querySelector('#view').appendChild(MainPage());
document.body.appendChild(Popup());

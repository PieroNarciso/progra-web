import './styles.css';

import Navbar from './components/Navbar';
import Popup from './components/Popup';


// NavBar
document.querySelector('#navbar').replaceWith(Navbar());

document.body.appendChild(Popup());

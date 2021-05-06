import './styles.css';

import Navbar from './components/Navbar';
import Popup from './components/Popup';
import Instrucciones from './components/Instrucciones';


// NavBar
document.querySelector('#navbar').replaceWith(Navbar());
document.querySelector('#view').appendChild(Instrucciones());


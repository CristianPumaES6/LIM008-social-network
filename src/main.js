// Este es el punto de entrada de tu aplicacion
import { configBD } from './config/configFireBase.js';
import { initRouter } from './UI/router.js';

window.onload = () => {
	
	configBD();
	initRouter();
}

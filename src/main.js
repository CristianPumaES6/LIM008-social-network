// Este es el punto de entrada de tu aplicacion
import { configBD } from './config/configFireBase.js';
import { initRouter } from './UI/router.js';

window.onload = () => {

	configBD();
	initRouter();

	var fichero = document.getElementById("fichero");

	fichero.addEventListener("change", () => {

		firebase.firestore().collection('IMG').doc("123").set({
			"nombre": fichero.files[0].name,
			"url": "www.google.com"
		}, { merge: true }).then(function (result) {
			console.log("----------------------CORRECTO")
			console.log(result)
		}).catch(function (err) {
			console.log("----------------------ERROR")
			console.log(err)
		})

	}, false);

}

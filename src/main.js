// Este es el punto de entrada de tu aplicacion
import { configBD } from './config/configFireBase.js';
import { initRouter } from './UI/router.js';

//ESTO SE SEBE DE BORRAR.
import { dataConnectUser } from './lib/authBD/authFirebase.js'
window.onload = () => {

	configBD();
	initRouter();

	var fichero = document.getElementById("fichero");

	fichero.addEventListener("change", () => {

		let imageASubir = fichero.files[0];
		var uploadTask = firebase.storage().ref().child('images/' + imageASubir.name).put(imageASubir).then((snapshot) => {
			snapshot.ref.getDownloadURL().then((getURL) => {


				firebase.firestore().collection('Post').add({
					"idUser": dataConnectUser().email,
					"tittle": "redes Inalambricas",
					"urlImage": getURL,
					"description": "las resdes inalambricas estan en todas partes del mundo."
				}).then(function (result) {
					console.log("----------------------CORRECTO")
					console.log(result)
				}).catch(function (err) {
					console.log("----------------------ERROR firebase.firestore().collection() linea 26 mainJS")
					console.log(err)
				});


			})
		}).catch((err) => {
			alert(err)
		});


		/*  */

	}, false);

}

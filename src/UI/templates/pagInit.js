// Login Facebook and Google
import { accesWithFbOrGoogle, loginUser, registerOnSubmit } from '../view-controller.js';
import { logInUser } from '../../lib/authBD/authFireBase.js';

export default () => {

    const container = document.getElementById('container');

    const tPagInit = `
    <h2 class="logo-in-main">communitytech</h2>
    <div class="header-right">
      <button class="btn-inite-sesion inite-text" id="buttonLogin">Iniciar session</button>
    </div>
    <h3 class="slogan">entérate de lo último en tecnología</h3>
    <div class="ways-of-inite">
      <button id="buttonRegister" class="btn-register"><span><a href="#/pagRegister">Registrate</a></span></button>
      <p>-o-</p>
      <button id="buttonFacebook" class="btn-continue-with-fb">Continuar con Facebook</button>
      <button id="buttonGoogle" class="btn-continue-with-google">Continuar con Google</button>
      <h4 class="final-phrase"> ¡Descubre nuestra comunidad! </h4>
    </div>
     `
    container.innerHTML = tPagInit;

    const buttonLogin = document.getElementById('buttonLogin');
    const buttonRegister = document.getElementById('buttonRegister');
    const buttonFacebook = document.getElementById('buttonFacebook');
    const buttonGoogle = document.getElementById('buttonGoogle');

    accesWithFbOrGoogle(buttonFacebook, buttonGoogle);
    loginUser(buttonLogin);
    registerOnSubmit(buttonRegister);
};
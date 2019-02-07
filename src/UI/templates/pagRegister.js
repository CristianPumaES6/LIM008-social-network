import { btnAcceptRegisterAndSendToHome } from '../view-controller.js';

export default () => {

  const container = document.getElementById('container');
  const tPagRegister = `
  <h2 class="text-center">únete a nuestra comunidad</h2>
  <form>
    <input type="text" id="createUsername" class="username" placeholder="nombre de usuario">
    <input type="text" id="createEmail"  class="correo" placeholder="correo">
    <input type="password" id="createPassword" class="password" placeholder="constraseña">
    <button class="btn-register" id="buttonAcceptRegister">
    Registrar
    </button>
  </form>
  `;
  container.innerHTML = tPagRegister;
  const createUsername = document.getElementById('createUsername');
  const createEmail = document.getElementById('createEmail');
  const createPassword = document.getElementById('createPassword');
  const buttonAcceptRegister = document.getElementById('buttonAcceptRegister');

  btnAcceptRegisterAndSendToHome(createUsername, createEmail, createPassword, buttonAcceptRegister);
}
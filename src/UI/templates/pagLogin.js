import { btnAcceptLoginAndSendToHome } from '../view-controller.js';

export default () => {

    const inputEmail = document.getElementById('inputEmail');
    const inputPassword = document.getElementById('inputPassword');
    const buttonAcceptLogin = document.getElementById('buttonAcceptLogin');

    btnAcceptLoginAndSendToHome(inputEmail, inputPassword, buttonAcceptLogin);

}
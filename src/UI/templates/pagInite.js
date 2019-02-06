import { accesWithFbOrGoogle } from '../view-controller.js';

export default () => {
    // Login Facebook and Google
    const buttonFacebook = document.getElementById('buttonFacebook');
    const buttonGoogle = document.getElementById('buttonGoogle');

    accesWithFbOrGoogle(buttonFacebook, buttonGoogle);
}
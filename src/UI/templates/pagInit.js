// Login Facebook and Google
import {accesWithFbOrGoogle} from '../view-controller.js';

export default  () => {

const buttonFacebook = document.getElementById('buttonFacebook');
const buttonGoogle = document.getElementById('buttonGoogle');

accesWithFbOrGoogle(buttonFacebook, buttonGoogle);
};
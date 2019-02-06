import { mainRedSocial } from '../view-controller.js';

export default () => {
    const butonLogOut = document.getElementById('buttonLogOut');
    const buttonDeleteUser = document.getElementById('buttonDeleteUser');
    mainRedSocial(butonLogOut, buttonDeleteUser);
}
import Inite from './templates/pagInit.js';
import Register from './templates/pagRegister.js';
import Login from './templates/pagLogin.js';
import Home from './templates/home.js';

const changeTmp = (hash) => {
    console.log("Invocar changeTmp = " + hash);

    if (hash === '#/' || hash === '' || hash === '#') {
        return viewTmp('#/init');
    } else if (hash === '#/pagInitSession' || hash === '#/pagRegister' || hash === '#/home') {
        return viewTmp(hash);
    };
}

const viewTmp = (routers) => {
    console.log("invocacion funcion viewTpm = " + routers)
    const router = routers;

    const container = document.getElementById('container');
    console.log("\n datos del HTML \n" + container.innerHTML);
    container.innerHTML = ' ';

    switch (router) {
        case '#/init':
            Inite();
            break;
        case '#/pagInitSession':
            Login();
            break;
        case '#/pagRegister':
            Register();
            break;
        case '#/home':
            Home();
            break;
        default:
            // Inite();
            break;
    }


    


}

export const initRouter = () => {

    window.addEventListener('load', changeTmp(window.location.hash));

    if ('onhashchange' in window) {
        window.onhashchange = () => {
            changeTmp(window.location.hash)
        }
    }

}



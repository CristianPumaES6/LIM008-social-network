import Inite from './templates/pagInit.js';
import Register from './templates/pagRegister.js';
import Login from './templates/pagLogin.js';
import Home from './templates/home.js';

export const initRouter = () => {
    Inite();
    Register();
    Login();
    Home();
};

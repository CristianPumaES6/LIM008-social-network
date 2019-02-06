import {
    authenticateFacebook, authenticateGoogle
}
    from '../lib/authBD/authFireBase.js';


export const accesWithFbOrGoogle = (buttonFacebook, buttonGoogle) => {
    buttonFacebook.addEventListener('click', () => {
        authenticateFacebook();
    });
    buttonGoogle.addEventListener('click', () => {
        authenticateGoogle();
    });
};
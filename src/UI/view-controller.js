import { createUser, authenticateFacebook, authenticateGoogle } from '../lib/authBD/authFireBase.js';
import { createUserFireStore, readUserFireStore } from '../lib/crudBD/crudUser.js';

const detectPromisesCreateUser = (funct) => {
    //result tiene todo los datos de facebook o Gmial (result = Object)
    funct.then((result) => {

        //Verifica si existe el email.
        readUserFireStore('Users', result.user.email)
            .then((respDoc) => {

                if (respDoc.data() === undefined) {
                    console.log("-------Registrar a la BD--------")

                    const user = result.user;

                    let objDataUser = {
                        usuario: user.displayName,
                        correo: user.email,
                        foto: user.photoURL,
                        estado: '',
                        edad: ''
                    };

                    console.log(objDataUser);

                    Object.keys(objDataUser).forEach((ele) => {

                        createUserFireStore('Users', objDataUser.correo, ele, objDataUser[ele])
                            .then(() => console.log('documento se escribio correctamente'))
                            .catch(() => console.log(err.message));

                    });

                } else console.log('Usuario ya existe en la BD');

            }).catch((err) => {

                console.log("-------ERRR readUserFireStore--------")
                console.log(err);
                console.log("---------------")
            })

    }).catch((err) => {
        console.log(err);

    });

}

export const accesWithFbOrGoogle = (buttonFacebook, buttonGoogle) => {
    buttonFacebook.addEventListener('click', () => {
        detectPromisesCreateUser(authenticateFacebook());
    });
    buttonGoogle.addEventListener('click', () => {
        detectPromisesCreateUser(authenticateGoogle());
    });
};
export const btnAcceptRegisterAndSendToHome = (userName, userEmail, userPassword, buttonAcept) => {

    // firebase.auth().createUserWithEmailAndPassword(email, password);
    buttonAcept.addEventListener('click', () => {
        createUser(userEmail.value, userPassword.value)
            .then((result) => {
                console.log("------createUser success-------")
                console.log(result)
            }).catch((err) => {
                console.log("------createUser error-------")
                console.log(err)
            })
    })
}
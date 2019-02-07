import { createUser, authenticateFacebook, authenticateGoogle, logInUser, userStateChange, logOutUser } from '../lib/authBD/authFireBase.js';
import { createUserFireStore, readUserFireStore, deleteUserFireStore } from '../lib/crudBD/crudUser.js';

const changeHash = (hash) => location.hash = hash;

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
                changeHash('/home');
            }).catch((err) => {

                console.log("-------ERRR readUserFireStore--------")
                console.log(err);
                console.log("---------------")
            })

    }).catch((err) => {
        console.log(err);

    });

};

export const accesWithFbOrGoogle = (buttonFacebook, buttonGoogle) => {
    buttonFacebook.addEventListener('click', () => {
        detectPromisesCreateUser(authenticateFacebook());
    });
    buttonGoogle.addEventListener('click', () => {
        detectPromisesCreateUser(authenticateGoogle());
    });
};


export const btnAcceptRegisterAndSendToHome = (userName, userEmail, userPassword, buttonAcept) => {

    buttonAcept.addEventListener('click', () => {
        createUser(userEmail.value, userPassword.value)
            .then((result) => {

                alert(`Se te ha enviado un mensaje de correo electronico:${result.user.email} \n Por favor de verificarlo para terminar con el proceso! Gracias`);

                const config = {
                    url: 'http://localhost:3000'
                };
                result.user.sendEmailVerification(config)
                    .catch((err) => {
                        alert(err.message);
                    });

            }).catch((err) => {
                console.log("------createUser error-------")
                console.log(err)
            })
    })
};

export const btnAcceptLoginAndSendToHome = (inputEmail, inputPassword, buttonAcceptLogin) => {

    buttonAcceptLogin.addEventListener('click', () => {
        console.log('click')
        logInUser(inputEmail.value, inputPassword.value).then(() => {
            changeHash('/home');
        }).catch((err) => {
            console.log(err.message);
        });

    })

};

export const mainRedSocial = (buttonLogOut, buttonDeleteUser) => {
    let stateUser = [];
    stateUser = userStateChange(stateUser);//investigar
    console.log(stateUser)

    buttonLogOut.addEventListener('click', () => {
        let userConnect = firebase.auth().currentUser.email;
        console.log(userConnect);
        logOutUser().then(() => {
            console.log('usuario fiuera de sesion');
            
            changeHash('');
        }).catch((err) => {
            console.log(err.message)
        })
    });

    buttonDeleteUser.addEventListener('click', () => {
        let userConnect = firebase.auth().currentUser.email;
        console.log(userConnect);
        console.log('evento click usuario eliminado');
        deleteUserFireStore('Users', userConnect);
    });


}



export const loginUser = (butttonLogin) => {
    butttonLogin.addEventListener('click', () => {
        changeHash("/pagInitSession");
    })
}

export const registerOnSubmit = (buttonRegister) => {
    buttonRegister.addEventListener('click', () => {
        changeHash("/pagRegister");
    })
}
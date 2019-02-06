export const createUserFireStore = (idCollection, idUser, key, value) => {
    console.log("entro por----------->")
    console.log(key);
    console.log("<--Fin")
    return firebase.firestore().collection(idCollection).doc(idUser).set({ [key]: value }, { merge: true });
}


export const readUserFireStore = (idCollection, idUser) => {
    console.log("-------readUserFireStore--------")
    console.log(firebase.firestore().collection(idCollection).doc(idUser).get());
    console.log("--------------")
    return firebase.firestore().collection(idCollection).doc(idUser).get();
}


export const deleteUserFireStore = (idCollection, idUser) => {
    console.log(idCollection + "---------" + idUser);
    firebase.firestore().collection(idCollection).doc(idUser).delete().then(() => {

        firebase.auth().currentUser.delete().then(() => {
            console.log('Se elimino correctamente el usuario de la bd: ' + idUser)
        }).catch((err) => {
            console.log('Error eliminando de bd ' + err.message)
        });

    }).catch((err) => {

        console.log('error eliminando usuario= ' + err.message);

    });
}
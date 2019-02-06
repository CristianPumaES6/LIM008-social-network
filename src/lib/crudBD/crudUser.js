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

let provider;
export const authenticateFacebook = () => {
    provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider);
};

export const authenticateGoogle = () => {
    provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
};



export const createUser = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
};


export const logInUser = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const userStateChange = (user) => {

    return firebase.auth().onAuthStateChanged((userState) => user.push(userState));;
};

export const logOutUser = () => {
    return firebase.auth().signOut();
}

export const dataConnectUser = () => {
    return firebase.auth().currentUser;
}
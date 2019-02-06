export const configBD = () => {
  const config ={
    apiKey: "AIzaSyCjDEHFHf98PvrN6_d7HgE0S1dHjrIXGCU",
    authDomain: "project-prueba-nw.firebaseapp.com",
    databaseURL: "https://project-prueba-nw.firebaseio.com",
    projectId: "project-prueba-nw",
    storageBucket: "project-prueba-nw.appspot.com",
    messagingSenderId: "198207788143"
  };
  firebase.initializeApp(config);
  return 1;
}; 
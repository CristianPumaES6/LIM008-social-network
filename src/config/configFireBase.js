export const configBD = () => {
  const config ={
    apiKey: "AIzaSyAmHyokWpQDVsmekrrcRfVkWI4sHkttmsM",
    authDomain: "networking-43ee6.firebaseapp.com",
    databaseURL: "https://networking-43ee6.firebaseio.com",
    projectId: "networking-43ee6",
    storageBucket: "networking-43ee6.appspot.com",
    messagingSenderId: "146347443700"
  };;
  firebase.initializeApp(config);
  return 1;
}; 
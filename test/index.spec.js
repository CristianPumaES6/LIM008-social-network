
// configurando firebase mock
const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();


global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore
);


// iniciando tests

import { createUser, logInUser, authenticateGoogle, authenticateFacebook, logOutUser, } from "../src/lib/authBD/authFirebase.js";


describe('createUser', () => {

  it('Deberia ser una funcion.', () => {
    expect(typeof (createUser)).toBe('function');
  });

  it('Debería poder crear un nuevo usuario.', () => {
    return createUser('mayratc@gmail.com', '123456').then((result) => {
      expect(result.email).toBe('mayratc@gmail.com')
    });
  });

});


describe('logInUser', () => {

  it('Deberia ser una funcion.', () => {
    expect(typeof (logInUser)).toBe('function');
  });

  it('Debería poder iniciar sesion.', () => {
    return logInUser('mayratc@gmail.com', '123456')
      .then((user) => {
        expect(user.email).toBe('mayratc@gmail.com')
      });
  });

});


describe('authenticateGoogle', () => {

  it('Deberia ser una funcion.', () => {
    expect(typeof (authenticateGoogle)).toBe('function');
  });

  it('Debería poder autenticarse con Google.', () => {
    return authenticateGoogle().then((result) => {
      expect(typeof result).toBe('object')
    });
  });

});


describe('authenticateFacebook', () => {

  it('Deberia ser una funcion.', () => {
    expect(typeof (authenticateFacebook)).toBe('function');
  });

  it('Debería poder autenticarse con facebook.', () => {
    return authenticateFacebook().then((result) => {
      expect(typeof result).toBe('object')
    });
  });

});


describe('logOutUser', () => {

  it('Deberia ser una funcion.', () => {
    expect(typeof (logOutUser)).toBe('function');
  });

  it('Debería poder cerrar sesion.', () => {
    return logOutUser().then((result) => {
      expect(result).toBe(undefined)
    });
  });

});

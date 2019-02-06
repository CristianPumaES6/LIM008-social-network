import { btnAcceptRegisterAndSendToHome} from '../view-controller.js';

export default () => {
    
  const createUsername = document.getElementById('createUsername'); 
  const createEmail = document.getElementById('createEmail');
  const createPassword = document.getElementById('createPassword');
  const buttonAcceptRegister = document.getElementById('buttonAcceptRegister');
  
  btnAcceptRegisterAndSendToHome(createUsername, createEmail, createPassword, buttonAcceptRegister);
}
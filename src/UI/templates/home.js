import { mainRedSocial} from '../view-controller.js';

export default () => {
  const container = document.getElementById('container');
  const divContent = `
    <button class="btn-inite-sesion inite-text" id="buttonDeleteUser">Eliminar cuenta</button> 
    <button class="btn-inite-sesion inite-text" id="buttonLogOut">Salir</button> 
    <input type="image" src="" id= "userPhoto" width="80" height="100" alt="Login"></input><br>
    <label id= "userName"></label>
    <select id = "filterTypePost" class="buttonsOfCategories">
        <option value="Todos">Elige tu filtro</option>
        <option value="Inteligencia Artificial">Inteligencia Artificial</option>
        <option value="Realidad virtual">Realidad virtual</option>
        <option value="Robótica">Robótica</option>
        <option value="Ciberseguridad">Ciberseguridad</option>
        <option value="Dispositivos móviles">Dispositivos móviles</option>
        <option value="Curiosidades">Curiosidades</option>
    </select>    
    <div class="section-of-new-post">
        <h6 class="text-create-new-post"> Crear nuevo post </h6>
        <input type="text" class="campo-de-texto" placeholder="¿Que hay de nuevo?"></input>
    </div>
    <button id="createPost">Crear Post</button>

    <div id ="postWall" class="grid-container">
    </div>`;
  container.innerHTML = divContent;

  // capturar todos los eventos de entrada del muro principal
  const userPhoto = document.getElementById('userPhoto');
  const userName = document.getElementById('userName');
  const buttonDeleteUser = document.getElementById('buttonDeleteUser');
  const buttonLogOut = document.getElementById('buttonLogOut');
  const filterTypePost = document.getElementById('filterTypePost');
  const createPost = document.getElementById('createPost');
  const postWall = document.getElementById('postWall');

  mainRedSocial(userPhoto, userName, buttonDeleteUser, buttonLogOut, createPost, postWall, filterTypePost);

  return 1;
};
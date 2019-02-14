export default (idPost, dataPost, deleteEdit, postWall) => {
  const divContent = document.createElement('DIV');
  divContent.setAttribute('id', idPost);
  divContent.setAttribute('class', 'grid-item');

  const divContent_ = `
        <div>
            ${deleteEdit}
            <label id= "postType" class = "slogan">${dataPost.privacidad}</label><br>
            <input id= "userPhoto" type="image" src="${dataPost.fotoUsuario}" width="80" height="100" alt="Login"></input><br>
            <label id= "userName" class = "slogan">${dataPost.nombreUsuario}</label><br>
            <label id= "dateAndTimeCreate" class = "slogan">${dataPost.fecha}</label><br>
            <label id= "postType" class = "slogan">${dataPost.categoria}</label><br>
            <label id= "postTitle" class = "slogan">${dataPost.titulo}</label><br>
        </div>
        <div>
            <img id="multmediaImage" src="${dataPost.contenido.multimedia}" width="150" height="100"><br>
            <label id = "postInfo">${dataPost.contenido.descripcion}</label><br>
        </div>
        <div>
            <button id="likes">Likes</button>
            <button id="comment">Comentar</button>
            <button id="share">Compartir</button>
        </div>
    `;
  divContent.innerHTML = divContent_;
  postWall.appendChild(divContent);
  return 1;
};
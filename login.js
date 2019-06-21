window.addEventListener("load", function() {

  if (sessionStorage.getItem("usuario") != null) {
    // al loguearse, el boton de iniciar sesion desaparece
    document.querySelector(".botonUsuario").style.display = "none"
    // el mensaje de bienvenido al usuario logueado
    document.querySelector(".bienvenido").innerHTML = "<div class= Bienvenido><p>Bienvenido " + sessionStorage.getItem("usuario") + "!</p> </div>"
  }
  else {
    // Si no esta logurado, el boton de peliculas preferidas desaparece
    document.querySelector(".pelispreferidas").style.display = "none"
  }
})
function procesarLogin(evento) {
  evento.preventDefault()
  // el prevent default es para que cuando se ejecute la funcion no se recargue la pagina
  // capturo el campo donde el usuario pone su nombre para ver el valor que tiene el string dentro del campo
  var nombre = document.querySelector(".campoNombre").value
    // capturo el campo donde el usuario pone su email para ver el valor que tiene el string dentro del campo
  var email = document.querySelector(".campoEmail").value

  if (nombre.length <4) {
    // mensaje de error de longitud de nombre si su longitud es menor a 4 letras
    UIkit.notification({message: 'Error. El nombre debe tener más de tres caracteres', status: 'danger'})
  }

  if (validateEmail(email) == false) {
    // mensaje de error de formato de email con uikit
    UIkit.notification({message: 'Error. El Email debe tener un formato válido', status: 'danger'})
  }

  if (validateEmail(email) && nombre.length >= 4) {
    //si el email esta validado y al mismo tiempo el nombre tiene 4 o mas letras, se ejecuta lo siguiente
     document.querySelector(".closer").click()
     // al loguearse, el boton de iniciar sesion desaparece, es decir, se apreta click en el closer automaticamente
     //el boton de iniciar sesion desaparece al loguearse
     document.querySelector(".botonUsuario").style.display = "none"
     document.querySelector(".pelispreferidas").style.display = "block"
     // el mensaje de bienvenido al usuario logueado
     document.querySelector(".bienvenido").innerHTML = "<div class= Bienvenido><p>Bienvenido " + nombre + "!</p> </div>"
     sessionStorage.setItem("usuario", nombre)
  }


}

function validateEmail(email) {
  // Buscamos en internet como validar el email desde javascript
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

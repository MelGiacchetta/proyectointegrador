window.addEventListener("load", function() {
  console.log("Estamos en el archivo nuevo");

  if (sessionStorage.getItem("usuario") != null) {
    // al loguearse, el boton de iniciar sesion desaparece
    document.querySelector(".botonUsuario").style.display = "none"
    // el mensaje de bienvenido al usuario logueado
    document.querySelector(".bienvenido").innerHTML = "<div class= Bienvenido><p>Bienvenido " + sessionStorage.getItem("usuario") + "!</p> </div>"
  }
  else {
    document.querySelector(".pelispreferidas").style.display = "none"
  }


})


function procesarLogin(evento) {
  evento.preventDefault()
  var nombre = document.querySelector(".campoNombre").value
  var email = document.querySelector(".campoEmail").value

  if (nombre.length <4) {
    // mensaje de error de longitud de nombre
    UIkit.notification({message: 'Error. El nombre debe tener más de tres caracteres', status: 'danger'})
  }

  if (validateEmail(email) == false) {
    // mensaje de error de formato de email con uikit
    UIkit.notification({message: 'Error. El Email debe tener un formato válido', status: 'danger'})
  }

  if (validateEmail(email) && nombre.length >= 4) {
     document.querySelector(".closer").click()
     // al loguearse, el boton de iniciar sesion desaparece
     document.querySelector(".botonUsuario").style.display = "none"
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

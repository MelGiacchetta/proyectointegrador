window.onload = function() { // capturamos el boton buscar y cuando se haga click en este, hace una animación y aparece el buscador que no estaba//

    var yaSeMostroElBuscador = false;

    document.querySelector("#botonBuscar").addEventListener("click", function(e) {
      if (yaSeMostroElBuscador == false) {
        e.preventDefault()
        yaSeMostroElBuscador = true;
        document.querySelector("#Buscador").classList.add('animated', 'slideInLeft')
        document.querySelector("#Buscador").style.display = "inline"
        var boton = document.querySelector("#botonBuscar")
        // Agarramos el boton de la lupa para que cuando se haga click se haga la busqueda
        boton.addEventListener("click", function(e) {


          // El prevent default cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo
          var input = document.querySelector("#Buscador")
          // Si lo que busca el usuario tiene menos de tres caracteres, se aparecera un modal sacado de uikit que le avise al usuario esto
          if (input.value.length < 3) {
            // Close all: esta funcion de uikit es para que cuando se apreta la x de cerrar, se cierren todas las notificaciones
            e.preventDefault()
            UIkit.notification.closeAll()
            UIkit.notification("Deben haber al menos tres caracteres", {status:'warning'})
          }
        })
    }
  })

    var registro = function (){
      document.querySelector("")
    }
     //vinculamos la api con la página para los géneros
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=ccaee37d8fbe5010cfb857e26fcce8d4")
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(datos) {
        console.log(datos);

        var generos = datos.genres
        for (var i = 0; i < generos.length; i++) {
          document.querySelector(".generos").innerHTML += '<option value="' + generos[i].id + '">' + generos[i].name + '</option>'
        }
      }) //aca empieza la vinculación con los próximos estrenos
      fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=ccaee37d8fbe5010cfb857e26fcce8d4&page=1")
        .then(function(respuesta) {
          return respuesta.json()
        })
        .then(function(datos) {
          console.log(datos);
          var estrenos = datos.results
          console.log(estrenos);
          // despues de la img va siempre esa url
          for (var i = 0; i < estrenos.length; i++) {
            document.querySelector(".estrenos").innerHTML+= '<li><a href="detalle.html?idDePelicula='+estrenos[i].id +'"><img src="https://image.tmdb.org/t/p/original/' + estrenos[i].poster_path + '" alt=""> <div class="uk-position-center uk-panel"></div></a></li>'
          }
          console.log(document.querySelector(".estrenos").innerHTML);
        })
        // aca empieza la vinculacion con las peliculas mejor puntuadas
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=ccaee37d8fbe5010cfb857e26fcce8d4&page=1")
          .then(function(respuesta) {
            return respuesta.json()
          })
          .then(function(datos) {
            console.log(datos);
            var puntaje = datos.results
            console.log(puntaje);
            // despues de la img va siempre esa url
            for (var i = 0; i < puntaje.length; i++) {
              document.querySelector(".puntaje").innerHTML+= '<li><a href="detalle.html?idDePelicula='+ puntaje[i].id+'"><img src="https://image.tmdb.org/t/p/original/' + puntaje[i].poster_path + '" alt=""> <div class="uk-position-center uk-panel"></div></a></li>'
            }
            console.log(document.querySelector(".puntaje").innerHTML);
          })
          // aca empieza la vinculacion con las peliculas mas populares
          fetch("https://api.themoviedb.org/3/movie/popular?api_key=ccaee37d8fbe5010cfb857e26fcce8d4&page=1")
            .then(function(respuesta) {
              return respuesta.json()
            })
            .then(function(datos) {
              console.log(datos);
              var populares = datos.results
              console.log(populares);
              // despues de la img va siempre esa url
              for (var i = 0; i < populares.length; i++) {
                document.querySelector(".populares").innerHTML+= '<li ><a href="detalle.html?idDePelicula='+populares[i].id+'"><img src="https://image.tmdb.org/t/p/original/' + populares[i].poster_path + '" alt=""> <div class="uk-position-center uk-panel"></div></a></li>'
              }
              console.log(document.querySelector(".populares").innerHTML);
            })

}
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.querySelector("#myLinks");
  var header = document.querySelector(".topnav")
  console.log(x);
  if (x.style.display === "block") {
    x.style.display = "none";
    // header.style.height= "85px"
    // header.style.position="relative"
  } else {
    x.style.display = "block";
    // header.style.height= "190px"
    // header.style.position="absolute"
  }



}

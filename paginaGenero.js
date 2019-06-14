window.addEventListener("load", function() {
  var url_string = window.location.href ; //window.location.href
  var url = new URL(url_string);
  var idGenSel = url.searchParams.get("idGenero");

  var genero = url.searchParams.get("nombre");
  var cambioGenero = document.querySelector(".titulos");
  cambioGenero.innerHTML = genero + ":";

  fetch("https://api.themoviedb.org/3/discover/movie?api_key=ccaee37d8fbe5010cfb857e26fcce8d4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + idGenSel)
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(datos) {
      console.log(datos);
      var peliculas = datos.results
      console.log(peliculas);
      // despues de la img va siempre esa url
      for (var i = 0; i < peliculas.length; i++) {
        document.querySelector(".porGenero").innerHTML+= '<li ><a href="detalle.html?idDePelicula='+ peliculas[i].id+'"><img src="https://image.tmdb.org/t/p/original/' + peliculas[i].poster_path + '" alt=""> <div class="uk-position-center uk-panel"></div></a></li>'
      }
      console.log(document.querySelector(".estrenos").innerHTML);
    })

})

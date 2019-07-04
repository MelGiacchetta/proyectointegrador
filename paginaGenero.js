window.addEventListener("load", function() {

  //agarro el id y creo una variable
  var url_string = window.location.href ; //window.location.href
  var url = new URL(url_string);
  var idGenSel = url.searchParams.get("idGenero");

  //para reemplazar el titulo de genero por el nombre del genero, agarro el nombre del genero en la url y lo pongo en el titulo
  console.log(idGenSel)
  var genero = url.searchParams.get("nombre");
  var cambioGenero = document.querySelector(".titulos");
  cambioGenero.innerHTML = genero + ":";

// agarro con la api las peliculas por genero
  fetch("https://api.themoviedb.org/3/discover/movie?api_key=ccaee37d8fbe5010cfb857e26fcce8d4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + idGenSel)
    .then(function(respuesta) {
      return respuesta.json()
    })
// hago que me devuelva los datos (peliculas)
    .then(function(datos) {
      console.log(datos);
      var peliculas = datos.results
      console.log(peliculas);
// agarro el ul donde van las peliculas y lo modifico para que me aparezca segun el genero del id
      for (var i = 0; i < peliculas.length; i++) {
        document.querySelector(".porGenero").innerHTML+= '<li> <a href="detalle.html?idDePelicula='+ peliculas[i].id +'"><img src="https://image.tmdb.org/t/p/original/'+peliculas[i].poster_path+ '"alt=""> <div class="uk-position-center uk-panel"></div></a></li>'
       }
      console.log(document.querySelector(".porGenero").innerHTML);
    })

})

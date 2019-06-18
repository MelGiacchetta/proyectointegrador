window.addEventListener("load", function() {

  var url_string = window.location.href ; //window.location.href
  var url = new URL(url_string);
  var idResultados = url.searchParams.get("Buscador");
console.log(idResultados);

  fetch("https://api.themoviedb.org/3/search/movie?api_key=ccaee37d8fbe5010cfb857e26fcce8d4&language=en-US&query=resultados&page=1&include_adult=false" + idResultados)
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(datos) {
      console.log(datos);
      var resultados = datos.results
      console.log(resultados);
      // despues de la img va siempre esa url
      for (var i = 0; i < resultados.length; i++) {
        document.querySelector(".busqueda").innerHTML += '<li><a href="resultados.html?Buscador='+ resultados[i].id+'"><img src="https://image.tmdb.org/t/p/original/' + resultados[i].poster_path + '"alt=""> <div class="uk-position-center uk-panel"></div></li>'
      }
      console.log(document.querySelector(".busqueda").innerHTML);
    })

})

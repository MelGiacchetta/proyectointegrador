window.addEventListener("load", function(){

  var urlSearchParams = new URLSearchParams(window.location.search)
  var idResultados = urlSearchParams.get('Buscador')
  console.log(idResultados);

  var API_KEY = "ccaee37d8fbe5010cfb857e26fcce8d4"
  var url = "https://api.themoviedb.org/3/search/movie?api_key="+ API_KEY +"&language=en-US&query="+ idResultados +"&page=1&include_adult=false"
  fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(objetoLiteralResultados) {
      console.log(objetoLiteralResultados);
      // GUARDO EL ARRAY DE PELIS
      var arrayDePeliculas = objetoLiteralResultados.results
      // CAPTURO EL UL
      var ul = document.querySelector('.busqueda')

      var li = ""
      // PARTE FIJA DE LA URL DE LA IMAGEN
      var urlImg = "https://image.tmdb.org/t/p/original"
      // RECORRO EL ARRAY DE PELIS
      for (var i = 0; i < arrayDePeliculas.length; i++) {
          li = "<li>"
          li += "<a href='detalle.html?idDePelicula="+arrayDePeliculas[i].id+"'>"
          li += "<img src='"+urlImg + arrayDePeliculas[i].poster_path+"'>"
          li += "</a>"
          li += "</li>"

          ul.innerHTML += li
      }
    })
    .catch(function(error) {
      console.log("the error was: " + error);
    })
})

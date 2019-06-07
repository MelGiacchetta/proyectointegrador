window.onload = function() { // capturamos el boton buscar y cuando se haga click en este, hace una animación y aparece el buscador que no estaba//
    document.querySelector("#botonBuscar").onclick = function() {
    document.querySelector("#Buscador").classList.add('animated', 'slideInLeft')
    document.querySelector("#Buscador").style.display = "inline"
    }
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
            document.querySelector(".estrenos").innerHTML += '<li ><img src="https://image.tmdb.org/t/p/original/' + estrenos[i].poster_path + '" alt=""> <div class="uk-position-center uk-panel"></div></li>'
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
              document.querySelector(".puntaje").innerHTML += '<li><img src="https://image.tmdb.org/t/p/original/' + puntaje[i].poster_path + '" alt=""> <div class="uk-position-center uk-panel"></div></li>'
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
                document.querySelector(".populares").innerHTML += '<li><img src="https://image.tmdb.org/t/p/original/' + populares[i].poster_path + '" alt=""> <div class="uk-position-center uk-panel"></div></li>'
              }
              console.log(document.querySelector(".populares").innerHTML);
            })


}

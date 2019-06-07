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

          for (var i = 0; i < estrenos.length; i++) {
            document.querySelector(".estrenos").innerHTML += '<li' + estrenos[i].id + '>' + estrenos[i].title + '</li>'
          }
        })


































}

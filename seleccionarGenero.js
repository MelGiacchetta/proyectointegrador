window.addEventListener("load", function() {
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
   })

  document.querySelector("select.generos").onchange = function() {
    var opcion = this.options[this.selectedIndex].value;
    var nombreOpcion = this.options[this.selectedIndex].text;
    location.href = "paginaGenero.html?idGenero=" + opcion +  "&nombre=" + nombreOpcion
  }
})

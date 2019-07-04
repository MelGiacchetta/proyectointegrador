window.addEventListener("load", function() {
console.log("cargaaaaa");
  function mostrarPeliculasFavoritas(){
  var listaDeFavoritos = JSON.parse (localStorage.getItem("peliculasFavoritas"))

  if (listaDeFavoritos == 0) {
   document.querySelector(".sin-peliculas").innerHTML="<h2>No tiene ninguna pelicula favorita</h2>"
  }
  else {

  document.querySelector(".sin-peliculas").style.display="none"

  for (var i = 0; i < listaDeFavoritos.length; i++) {
   var elementoFavorito = listaDeFavoritos[i]
   var URL = "https://api.themoviedb.org/3/movie/"+ elementoFavorito +"?api_key=ebcc7d54892cbf6b9dd7c194bd052f2f&language=en-US"

   fetch (URL)
   .then(function(response) {
     return response.json();
   })
   .then(function(data) {
     console.log(data);

     var arrayDePeliculasPorGeneros= data
     var li
     // for (var i = 0; i < arrayDePeliculasPorGeneros.length; i++) {
       if(arrayDePeliculasPorGeneros.poster_path != null){
       var id = arrayDePeliculasPorGeneros.id
       var titulo = arrayDePeliculasPorGeneros.title
       var imagen = arrayDePeliculasPorGeneros.poster_path
       li="<article id='articulosFavoritos' class='peliculasGeneros'>"
       li+= "<a href=detallePelicula.html?id="
       li += id
       li +=">"
       li+= "<img class='generos-imagenes' src='https://image.tmdb.org/t/p/original"
       li+=imagen
       li+= "' alt='img producto'>"
       li+= "<h2 class='titulo-producto'>"
       li+= "<a href=detallePelicula.html?id="
       li+= id
       li+=">"
       li+= titulo
       li+="</a></h2>"
       li+= '<button id="sacarFavs" onclick= "sacarFavorito('+ id +')"> Sacar de favoritas </button> </article>'

       // document.querySelector(".contenedor").innerHTML += "<article class='peliculasGeneros'><img class='generos-imagenes' src='https://image.tmdb.org/t/p/original" + imagen + "' alt='img producto'><h2 class='titulo-producto'><a href=detallePelicula.html?id=" + id +  ">" + titulo + "</a></h2></article>"
       document.querySelector(".favoritas").innerHTML += li

   // }
     }
   })
  }
  }
  }



})

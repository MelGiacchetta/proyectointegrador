window.addEventListener("load",function(){
  var urlImg= "https://image.tmdb.org/t/p/original";
  var urlParams = new URLSearchParams(window.location.search);
  var id = urlParams.get('idDePelicula');

  var jsonFavoritas = localStorage.getItem("peliculasFavoritas")


   if (jsonFavoritas == null) {
     var favoritas = []
   } else {
     // Paso 2 - Desempaqueto el json, si tiene lo convierte en objeto literal
     var favoritas = JSON.parse(jsonFavoritas)
   }

   console.log(favoritas);

  console.log("detalle");
   //detalle pelicula proximamente
fetch("https://api.themoviedb.org/3/movie/"+ id +"?api_key=ccaee37d8fbe5010cfb857e26fcce8d4")
  .then(function(respuesta){
    return respuesta.json();
  })
  .then(function(datos){
    console.log(datos)

    var imagenpelis= document.querySelector("div.imagenpelis");
    var img = urlImg + datos.poster_path;

    imagenpelis.innerHTML= '<img src="'+ img +'" alt="">'
    var contenedorpelis= document.querySelector("div.contenedorpelis");
    var detalle= datos.overview;
    var titulo = datos.title;
    var arrayDeGeneros= datos.genres;
    var generos=""
    // usamos un for para recorrer el array
    for (var i = 0; i < arrayDeGeneros.length; i++) {
       generos += '<a href="paginaGenero.html?idGenero=' + arrayDeGeneros[i].id +'&nombre='+arrayDeGeneros[i].name+'">' + arrayDeGeneros[i].name +'</a>'+ ",";
       // lo vinculo para que cuando toco en el genero me mande a las peliculas de ese genero, necesito el id de la pelicula y ademas el nombre= y el nombre del genero
    }
    var lenguajeOriginal= datos.original_language;
    var estreno= datos.release_date;
    contenedorpelis.innerHTML= '<p class="tituloPeli">' + titulo + '<a href="" id="pelicula" uk-icon="star" class="estrellita"></a></p>' + '<p>' + detalle + '</p>'+ '<p>'+ "Géneros: " + generos + '</p>' + '<p>'+ "Lenguaje: " + lenguajeOriginal + '</p>' +'<p>' + "Estreno: " + estreno + '</p>' ;

//FAVORITAS
    console.log(favoritas.indexOf(id));
    if (favoritas.indexOf(id) >= 0) {
       document.querySelector(".estrellita").style.color = "gold"
     }
//  Estrellita para que se pinte
    document.querySelector(".estrellita").onclick = function(e) {
      //para que no se recargue la pagina una vez que haces click:
      e.preventDefault()
      // Bloque 3 a - Modifico el array
      if (favoritas.indexOf(id) >= 0) {
        // La quito
        var pos = favoritas.indexOf(id)
        favoritas.splice(pos,1)
        document.querySelector("svg").style.color = "white"
      } else {
        // La agrego
        favoritas.push(id)
        document.querySelector("svg").style.color = "gold"
      }
      // Fin bloque 3 a

      // Bloque 3 b
        var json = JSON.stringify(favoritas)

        localStorage.setItem("peliculasFavoritas", json)
      // Fin bloque 3 b
    }

  })
  .catch(function(error){
    console.log(error)
  })


  //fetch del trailer
  fetch("https://api.themoviedb.org/3/movie/" + id + "/videos?api_key=ccaee37d8fbe5010cfb857e26fcce8d4")
  .then(function(respuesta){
    return respuesta.json();
  })
  .then(function(datos){
    console.log(datos)
    var key= datos.results[0].key
    document.querySelector("iframe").src += key
  })
  .catch(function(error){
    console.log(error)
  })

//recomendaciones
document.querySelector(".VerRecomendaciones").addEventListener("click", function(){
fetch("https://api.themoviedb.org/3/movie/" + id + "/recommendations?api_key=ccaee37d8fbe5010cfb857e26fcce8d4")
.then(function(respuesta){
 return respuesta.json()
})
.then(function(datos){
console.log(datos)
var recomendaciones = datos.results
var r= ""
console.log(recomendaciones);
for (var i = 0; i < recomendaciones.length; i++) {
document.querySelector(".peliculasRecomendadas").innerHTML+= '<li ><a href="detalle.html?idDePelicula='+recomendaciones[i].id +
'"><img src="https://image.tmdb.org/t/p/original/' + recomendaciones[i].poster_path + '" alt=""></a></li>'
}})
.catch(function(){
  console.log(error)
})
})

var urlParams = new URLSearchParams(window.location.search);
var idPelicula = urlParams.get("idDePelicula")
console.log(idPelicula)

})

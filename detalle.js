window.addEventListener("load",function(){
  var urlImg= "https://image.tmdb.org/t/p/original";
  var urlParams = new URLSearchParams(window.location.search);
  var id = urlParams.get('idDePelicula');

  console.log("detalle");
   //detalle pelicula proximamente
fetch("https://api.themoviedb.org/3/movie/"+id+"?api_key=ccaee37d8fbe5010cfb857e26fcce8d4")
  .then(function(respuesta){
    return respuesta.json();
  })
  .then(function(datos){
    console.log(datos)

    var imagenpelis= document.querySelector("div.imagenpelis");
    var img = urlImg +
    datos.poster_path;

    imagenpelis.innerHTML= '<img src="'+ img +'" alt="">'
    var contenedorpelis= document.querySelector("div.contenedorpelis");
    var detalle= datos.overview;
    var titulo =datos.title;
    var arrayDeGeneros= datos.genres;
    var generos=""
    // usamos un for para recorrer el array
    for (var i = 0; i < arrayDeGeneros.length; i++) {
      generos += arrayDeGeneros[i].name+ ", "
    }
    var lenguajeOriginal= datos.original_language;
    var estreno= datos.release_date;
    contenedorpelis.innerHTML= '<p class="tituloPeli">' + datos.title + '</p>' + '<p>' + datos.overview + '</p>'+ '<p>'+ "Géneros: " + generos + '</p>' + '<p>'+ "Lenguaje: " + datos.original_language + '</p>' +'<p>' + "Estreno: " + datos.release_date+ '</p>' ;

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
document.querySelector(".Recomendadas").innerHTML+= '<img src="https://image.tmdb.org/t/p/original/' + recomendaciones[i].poster_path + '" alt="">' }
})
.catch(function (error){
  console.log(error) })
})






})

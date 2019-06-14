window.addEventListener("load",function(){
  var urlImg= "https://image.tmdb.org/t/p/original";
  var urlParams = new URLSearchParams(window.location.search);
  var id = urlParams.get('idDePelicula');

  console.log("detalle");
   //detalle pelicula
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
    for (var i = 0; i < arrayDeGeneros.length; i++) {
      generos += arrayDeGeneros[i].name+ ", "
    }
    var lenguajeOriginal= datos.original_language;
    var estreno= datos.release_date;
    contenedorpelis.innerHTML= '<p class="tituloPeli">' + datos.title + '</p>' + '<p>' + datos.overview + '</p>'+ '<p>' + generos + '</p>' + '<p>' + datos.original_language + '</p>' +'<p>' + datos.release_date+ '</p>' ;

  })
  .catch(function(error){
    console.log(error)
  })









})

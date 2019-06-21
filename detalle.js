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
    var titulo = datos.title;
    var arrayDeGeneros= datos.genres;
    var generos=""
    // usamos un for para recorrer el array
    for (var i = 0; i < arrayDeGeneros.length; i++) {
       generos += '<a href="paginaGenero.html?idGenero= + arrayDeGeneros[i].id ">' + arrayDeGeneros[i].name +'</a>'+ ","
    }
    var lenguajeOriginal= datos.original_language;
    var estreno= datos.release_date;
    contenedorpelis.innerHTML= '<p class="tituloPeli">' + titulo + '<a href="" uk-icon="star" class="estrellita"></a></p>' + '<p>' + detalle + '</p>'+ '<p>'+ "Géneros: " + generos + '</p>' + '<p>'+ "Lenguaje: " + lenguajeOriginal + '</p>' +'<p>' + "Estreno: " + estreno + '</p>' ;

  })
  .catch(function(error){
    console.log(error)
  })

  // INICIO BLOQUE 1 - Leer el array de storage

    // Paso 1 - Leo de localStorage
    var jsonFavoritas = localStorage.getItem("peliculasFavoritas")

    if (jsonFavoritas == null) {
      var favoritas = []
    } else {
      // Paso 2 - Desempaqueto el json
      var objLit = JSON.parse(jsonFavoritas)

      // Paso 3 - Leo del obj lit, la caracteristica importante
      var favoritas = objLit.caracteristica;
    }
  // CIERRA BLOQUE 1
  if (favoritas.indexOf(idPelicula) >= 0) {
    document.querySelector(".estrellita").style.backgroundColor = "gold"
  }

    // Bloque 3 - Que pasa al clickear en la estrella
    document.querySelector(".estrellita").onclick = function(e) {
      e.preventDefault()
      // Bloque 3 a - Modifico el array
      if (favoritas.indexOf(idPelicula) >= 0) {
        // La quito
        var pos = favoritas.indexOf(idPelicula)
        favoritas.splice(pos,1)
        document.querySelector(".estrellita").style.backgroundColor = "white"
      } else {
        // La agrego
        favoritas.push(idPelicula)
        document.querySelector(".estrellita").style.backgroundColor = "gold"
      }
      // Fin bloque 3 a

      // Bloque 3 b

              var json = JSON.stringify(favoritas)

              localStorage.setItem("peliculasFavoritas", json)
            // Fin bloque 3 b

    }
    // Fin bloque 3

    // fetch("URLDETALLE" + idPelicula)
    //   .then(function(data) {
    //     return data.json()
    //   })
    //   .then(function(dataPeli) {
    //     // HACEN COSAS PARA MOSTRAR EL DETALLE
    //
    //     // Inicio bloque 2 - Si la peli ya era favorita que aparezca ya pintada la estrella
    //     if (favoritas.indexOf(idPelicula) >= 0) {
    //       PONER LA ESTRELLA YA PINTADA
    //     }
    //     // Fin bloque 2
    //
    //   })

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
document.querySelector(".peliculasRecomendadas").innerHTML+= '<li ><a href="detalle.html?idDePelicula='+recomendaciones[i].id +
'"><img src="https://image.tmdb.org/t/p/original/' + recomendaciones[i].poster_path + '" alt=""></a></li>'
}})
.catch(function(){
  console.log(error)
})
})







})

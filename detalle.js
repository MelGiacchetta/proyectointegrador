window.addEventListener("load",function(){
   //detalle pelicula
fetch("https://api.themoviedb.org/3/movie/550?api_key=ccaee37d8fbe5010cfb857e26fcce8d4")
  then.(function(respuesta){
    return respuesta.json();
  })
  then.(function(datos){
    console.log(datos)
  })
})






















)}

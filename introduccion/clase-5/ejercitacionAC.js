// Importamos nuestro array
const movies = require('./movies')

//-----------------------------------------
//Cantidad de peliculas por cada año

let sumYear2006 = 0
let sumYear2007 = 0
let sumYear2008 = 0
let sumYear2009 = 0
let sumYear2011 = 0
let sumYear2012 = 0
let sumYear2013 = 0
let sumYear2014 = 0
let sumYear2015 = 0
let sumYear2016 = 0

for(i = 0; i < movies.length; i++) {
    if(movies[i].Year=="2006"){
        sumYear2006++
    }
    if(movies[i].Year=="2007"){
        sumYear2007++
    }
    if(movies[i].Year=="2008"){
        sumYear2008++
    }
    if(movies[i].Year=="2009"){
        sumYear2009++
    }
    
    if(movies[i].Year=="2011"){
        sumYear2011++
    }
    if(movies[i].Year=="2012"){
        sumYear2012++
    }
    if(movies[i].Year=="2013"){
        sumYear2013++
    }
    if(movies[i].Year=="2014"){
        sumYear2014++
    }
    if(movies[i].Year=="2015"){
        sumYear2015++
    }
    if(movies[i].Year =="2016"){
        sumYear2016++
    }
    
}
console.log("Cantidad de Peliculas en el año 2006: ", sumYear2006)
console.log("Cantidad de Peliculas en el año 2007: ",sumYear2007)
console.log("Cantidad de Peliculas en el año 2008: ",sumYear2008)
console.log("Cantidad de Peliculas en el año 2009: ",sumYear2009)
console.log("Cantidad de Peliculas en el año 2010: ",sumYear2011)
console.log("Cantidad de Peliculas en el año 2011: ",sumYear2012)
console.log("Cantidad de Peliculas en el año 2012: ",sumYear2013)
console.log("Cantidad de Peliculas en el año 2013: ",sumYear2014)
console.log("Cantidad de Peliculas en el año 2014: ",sumYear2015)
console.log("Cantidad de Peliculas en el año 2015: ",sumYear2016)

//----------------------------------------------------
//Generar nuevo array con los nombres de las peliculas

let arrayNombreMovies = movies.map(function(element, Title){
    
    return (element.Title)

})
console.log("Nombre de Películas: ", arrayNombreMovies)

//----------------------------------------------------
//Cantidad total de imagenes de todas las peliculas

const cantidadImagenes = () => {
    let sumImagenes = 0
for(i = 0; i < movies.length; i++){
    for(j = 0; j < movies[i].Images.length; j++){
        sumImagenes++
    }
}
//cantidadImagenes = cantidadImagenes + 2
console.log("La cantidad total de imagenes de todas las películas son: ", sumImagenes)
}
cantidadImagenes()

//----------------------------------------------
//Cantidad de peliculas que todavia no salieron

let cantidadComingSoon = 0
for (i = 0; i < movies.length; i++){
    if(movies[i].ComingSoon === true){
        cantidadComingSoon++
    }
}

console.log("Las cantidad de películas próximas a estrenar son: ", cantidadComingSoon)

//-------------------------------------------------
//Porcentaje de Peliculas que todavia no salieron

let contadorPeliculas = 0
let porcentajeNoSalieron = 0

for(let i = 0; i < movies.length; i++){
    contadorPeliculas++
}
porcentajeNoSalieron = (cantidadComingSoon/contadorPeliculas)*100
console.log("El porcentaje de peliculas a estrenar sobre el total de películas es: ", porcentajeNoSalieron,"%")

 
//Mayor de edad
const age = 20

if (age >=18){
    console.log("Es mayor de edad")
}else {
    console.log("Es menor de edad")
}

//Suma
const a = 3
const b = 2
var suma = 0
suma = a + b
if(suma > a){
    console.log(a)
}
if(suma > b){
    console.log(b)
}

//C. Par/Impar
const c = 14
var parimpar = c % 2

if(parimpar == 0){
    console.log("Es par")
}else {
    console.log("Es impar")
}

//Dia de la semana

const dia = 7
switch(dia){
    case 1: 
        console.log("Lunes")
        break
    case 2:
        console.log("Martes")
        break
    case 3: 
        console.log("Miercoles")
        break
    case 4:
        console.log("Jueves")
        break
    case 5: 
        console.log("Viernes")
        break
    default:
        console.log("Fin de semana")

}
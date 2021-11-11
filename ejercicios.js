let array1 = [10,20,55,321321,312,4043,4341,0,312321,1]

let suma = 0

for(let i = 0; i < array1.length; i++){
		suma = suma + array1[i]
}
console.log("La suma del array 1 es: " , suma)
//console.log(array1.length)
//-------------------------
let array2 = [2,5,22,43124,32321,12,321312,10,1]

let prome = 0
let suma2 = 0

for(let i = 0; i < array2.length; i++){
		suma2 = suma2 + array2[i]
}
prom = suma2/array2.length

console.log("El promedio de la suma del array 2 es: ", prom)
//----------------------------
let array3 = [
    { name: 'juana', age: 12 },
    { name: 'jhonny', age: 22 },
    { name: 'luis', age: 51 },
    { name: 'claudia', age: 33 },    
]
let mayorEdad = array3.filter(function(element1){
    return element1.age >= 18
})
console.log("Los mayores de edad del array3 son: ", mayorEdad)

let menorEdad = array3.filter(function(element2){
    return element2.age < 18
})
console.log("Los menores de edad del array3 son: ", menorEdad)

let numeros = [1,2,3,4,5,6,7,8,9,10];

[num1,num2,num3,num4,num5,num6,num7,num8,num9,num10] = numeros

let numerosDiscriminados = [num1,num3,num4]

// console.log(numerosDiscriminados)

let mascota = {
    nombre: "Benito",
    tipo: "Perro",
    color: "Dorado",
    raza: " Golden retriever"
};

let { nombre, tipo, color, raza} = mascota;

let mensaje = `Hola les presento a mi mascota su nombre es: ${nombre}, es un hermoso ${tipo}, de color: ${color} y su raza es: ${raza}`

console.log(mensaje)
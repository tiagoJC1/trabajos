let parte = ["que" , "tu" , "pasado"];
let frace = ["no" , "dejes", ...parte , "ocupe" , "todo" , "tu" , "presente"];

// console.log(frace);

let persona = {nombre: "Ema"};

let personas = ["Nathalia", "Franco", "Juan", parte]; // => let personas = ["Nathalia", "Franco", "Juan", "que" , "tu" , "pasado"];
// let personas1 = ["Nathalia", "Franco", "Juan", ...persona] // => no se puede

//////////////////////

let per = {
    nom: "Tiago",
    // ape: "Cuello",
    // edad:19,
};

let datos = {
    ...per,
    ...persona
};

// console.log(datos); // => no de puede mandar: ...datos , te va tirar la bonca

////////////////////////////////////////////////////

let pers = {
    nombre:"Alejandro",
    apellido:"Salias",
    edad:48,
    estdiando: true
};

let {edad, ...nuevoObjP} = pers; // nuevoObjP le quita los derechos a un objeto, osea que lo quita

console.log(nuevoObjP);// da esto { nombre: 'Alejandro', apellido: 'Salias', estdiando: true }
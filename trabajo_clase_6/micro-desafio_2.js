//  
let peliculas =  ["Turno de día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick",
"Elvis","Thor: amor y trueno"] ;

// console.log(peliculas) ;

let  peliDestacada = peliculas[6] ;

let peliculaDestacada = peliDestacada.toUpperCase();

// console.log("la pelicula mas vendida es" +peliculaDestacada)

let peliculasAEstrenar = ["Counter-Strike","NOP","Vértigo", "Nick","Avatar"];

let noEsPelicula = peliculasAEstrenar.shift();

// console.log(peliculasAEstrenar);

let todasLasPelis = peliculas.concat(peliculasAEstrenar);

console.log(todasLasPelis)

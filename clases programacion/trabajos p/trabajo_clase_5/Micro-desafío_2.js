function ham(tipoDeHamburGuesa) { 
    switch(tipoDeHamburGuesa) {
case "CarneALaParrilla":
    return 1800; break; 
case "Pollo":
    return 1500; break; 
case "Vegetariana":
    return 1200 ; break;
default:
    return 0    
   }
};
function con(algo) {
    switch(algo) {
case "Jamón":
    return 30; break;
case "Queso":
    return 25; break;
case "SalsaDeTomate":
    return 5; break;
case "Mayonesa":
    return 5; break;
case "Mostaza":
    return 5; break; 
case "Tomate":
    return 15; break
default:
    return 0     
  }
} ;

function menu(carne,algo1,algo2,algo3,algo4,algo5,algo6) {
    let pido = ham(carne) + con(algo1) +con(algo2) + con(algo3) + con(algo4) + con(algo5) + con(algo6);
    return pido 
};


console.log(menu("Pollo","Tomate","Jamón"))




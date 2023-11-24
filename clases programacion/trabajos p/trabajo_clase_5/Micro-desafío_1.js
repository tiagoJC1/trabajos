// alquilerDeUnVehiculo = ("tipo de vehículo" = , "Días de alquiler" , "silla para bebe")
//"tipo de vehículo" Compacto: $14000  Mediano: $17000 Camioneta: $28000

function vehículo(tipo) {
    switch(tipo) {
        case "Compacto":
            return 14000;break;
        case "Mediano":
            return 17000;break;
        case "Camioneta":
            return 28000;break;
        default:
            return "no existe"
    }
};
let compacto = vehículo("Compacto");
let mediano = vehículo("Mediano");
let Camioneta = vehículo("Camioneta");
    
let compactoConSilla = compacto + 1200;    
let medianoConSilla = mediano + 1200;      
let CamionetaConSilla = Camioneta + 1200;  


function pagar(pido,porDia){
    switch(pido){
        case "compacto con silla":
            return compactoConSilla*porDia;break;
        case "mediano con Silla":
            return medianoConSilla*porDia;break;
        case "Camioneta con silla":
            return CamionetaConSilla*porDia;break;
        case "compacto":
            return compacto*porDia;break;
        case "mediano":
            return mediano*porDia ;break;
        case "Camioneta":
            return Camioneta*porDia ;break;
        default:
            console.log("no existe")
    }
}; 

///////////////////////////////////////////

// console.log("Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando los 3 díasutilizados, el monto total a pagar es de: " + pagar("mediano",10))

// console.log(pagar("Camioneta con silla",1))

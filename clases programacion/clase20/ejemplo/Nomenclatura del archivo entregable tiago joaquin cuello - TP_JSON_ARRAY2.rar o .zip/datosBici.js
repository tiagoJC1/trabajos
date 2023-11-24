let fs = require('fs') ;

let leerJSON = () => {
    let biciJSON = fs.readFileSync('/bicicletas.json','utf-8') 
    let leer1 = JSON.parse(biciJSON) 
    return leer1
    
}

module.exports ={
    leerJSON
}
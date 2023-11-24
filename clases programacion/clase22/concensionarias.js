let inportar = (marca) => {
    let fs = require('fs')
    let numMarca = "" ;
    if(marca === "Toyota") {
        numMarca = "marca1"
    }
    if(marca === "Ford") {
        numMarca = "marca2"
    }
    if(marca === "Chevrolet") {
        numMarca = "marca3"
    }
    let path = `./datos/${numMarca}.json`
    let marcaSJON = fs.readFileSync(path,'utf-8')
    let marcaParce = JSON.parse(marcaSJON)
    return marcaParce
}

module.exports = inportar

console.log(inportar("Chevrolet"))
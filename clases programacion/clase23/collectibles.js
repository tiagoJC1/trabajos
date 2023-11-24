let inportar = (marca) => {
    let fs = require('fs')
    let nomMarca = "" ;
    if(marca === "Hot Toys") {
        nomMarca = "figuras1"
    }
    if(marca === "Bandai") {
        nomMarca = "figuras2"
    }
    if(marca === "Star Wars") {
        nomMarca = "figuras3"
    }
    let path = `./datos/${nomMarca}.json`
    let marcaJSON = fs.readFileSync(path,'utf-8')
    let marcaP = JSON.parse(marcaJSON)
    return marcaP
}

module.exports = inportar ;

// console.log(inportar("Bandai"))
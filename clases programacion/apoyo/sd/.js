let fs = require("fs");
// const JSONpath = require("path");
let jsonPath = fs.readFileSync("./bicicletas.json") // --> me falta poner una array de bicicleatas a la carpeta "sd"
//  parce transforma una array en 
let getData = (path)  => JSON.parse(fs.readFileSync(path, "utf-8"))


module.exports = {
    getData        // es para transferirir este archivo a otro archivo
}
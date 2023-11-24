let fs = require('fs') 

let leerJSON = () => {
    let pelisJSON = fs.readFileSync('./peliculas.json','utf-8')
    let pelisJS = JSON.parse(pelisJSON)
    return pelisJS

}

module.exports = {
    leerJSON
}
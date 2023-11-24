let inportar = require(`./collectibles.js`)

let hotToys = inportar("Hot Toys") ;
let bandai = inportar("Bandai") ;
let starWars = inportar("Star Wars");

// console.log(starWars) ;
// console.log(bandai);
// console.log(hotToys);

let unifiedCollectibles = [
    ...hotToys,
    ...bandai,
    ...starWars
]

// console.log(unifiedCollectibles)

let collectibles = {
    figuras : unifiedCollectibles,
    listFigures: function(){
        this.figuras.forEach((figuras, index) => {
            console.log(`${index + 1} - ${figuras.marca} ${figuras.nombre} _precio: ${figuras.precio} cantidad:${figuras.stock}`)
        })
    },
    figuresByBrand: function(brand) {
        let figusFiltradas = this.figuras.filter(({marca}) => marca.toLowerCase() === brand.toLowerCase())
        return figusFiltradas
    }
}

console.log(collectibles.figuresByBrand("Star Wars"))
let inportar = require('./concensionarias.js')

let toyota = inportar("Toyota") ;
let chevrolet = inportar("Chevrolet") ;
let ford = inportar("Ford") ;

// console.log(toyota);
// console.log(chevrolet);
// console.log(ford);

let uni = [
    ...toyota,
    ...ford,
    ...chevrolet
]
// console.log(uni)


let consecionaria = {
    autos: uni,
    listaAutos: function(){
        this.autos.forEach((auto, index) =>{
            console.log(`${index + 1} - ${auto.marca} ${auto.modelo}---> precio: ${auto.precio}---> cantidad:${auto.stock}`)
        })
    },
    autoByBrand: function(brand) {
        let autosFiltraados = this.autos.filter(({marca}) => marca.toLowerCase() === brand.toLowerCase())
        return autosFiltraados
    }
}
console.log(consecionaria.autoByBrand("Toyota"))
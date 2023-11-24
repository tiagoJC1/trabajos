let datosPelis = require('./datosPelis.js') ;

let dhPeli = {
    peliculas: datosPelis.leerJSON(),
    buscarPeli: function(id) {
        let peliEnc = this.peliculas.filter((elento) => {
            return elento.id === id; 
        })
        return peliEnc ;
    }, 
    venderPeli: function(id) {
        let peliEnc = this.buscarPeli(id)
        if(peliEnc === undefined) {
            return "Película no encontrada";
        }
        peliEnc[0].vendida = true;
        return peliEnc[0]; 
    },
    pelisPraLaVenta: function() {
        let pelisNoVendidas = this.peliculas.filter((peli) => {
            return peli.vendida
        })
        return pelisNoVendidas
    },
    totalDeVentas: function() {
        this.peliculas.reduce((acum,peli) =>{
            if(peli.vendida) {
                acum += peli.precio;
            }
            return acum
        },0)
        return total 
    }
};

console.log(dhPeli.buscarPeli(5))
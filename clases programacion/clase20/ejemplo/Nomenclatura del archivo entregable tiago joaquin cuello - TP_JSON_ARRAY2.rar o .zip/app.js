let datosBici = require('./datosBici.js') ;

let dhBici = {
    bicicletas : datosBici.leerJSON(),
    buscarBici : function(id) {
        let biciEnc = this.bicicletas.filter((elemento) => {
            return elemento.id === id;
        })
        return biciEnc ; 
    },
    venderBici: function(id) {
        let biciEnc = this.buscarBici(id)
        if(biciEnc === undefined) {
            return "Bicicleta no encontrada";
        }
        biciEnc[0].vendida = true;
        return biciEnc[0];
    },
    biciParaLaVenta: function() {
        let biciNoVendidas = this.bicicletas.filter((bici) => {
            return bici.vendida
        })
        return biciNoVendidas
    },
    totalDeVentas: function() {
        this.bicicletas.reduce((amm,bici) => {
            if (bici.vendida)  {
                amm += bici.precio; 
            }
            return amm
             },0 ) 
            return total   
    }
};

console.log(dhBici.buscarBici(5))
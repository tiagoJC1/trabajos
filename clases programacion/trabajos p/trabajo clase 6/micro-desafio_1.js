// 1_
let productos = ["Heladera","Tostadora","Licuadora","Freidora","Aspiradora","Lavadora"] ;

// 2_
let menosProductos = productos.shift() ;

// 3_
productos.push("Horno","Microondas","Heladera") ;

// 4_ 
console.log(productos) ;

// 5_
let buscoProducto = productos.includes("queso")?"Producto encontrado" : "El producto buscadono existe."  ; 
console.log(buscoProducto) ;

// 6_
let conjuntoDeProductos = productos.join(" ") ;
console.log(conjuntoDeProductos) ;

// 7_
let cantidadDeProductos = productos.length;
console.log("cantidad de productos:"+cantidadDeProductos) ;

// 8_
let = remplasarProductos = productos.map(algo => algo.replace("Tostadora","Queso"));
console.log(remplasarProductos) ;

// 9_ 
let productoSeparadosPorComa = productos.join(",") ;
console.log(productoSeparadosPorComa) ;
 

















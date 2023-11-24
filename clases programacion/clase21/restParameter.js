let sumar = (n1,n2) => {
    return n1 + n2 
};


let suma = (...nums) => {
    nums.reduce((acum,num) => {
    acum += num
    return acum
})
};

console.log(sumar(1,2,3,4,5,6,6))
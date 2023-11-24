let arrNum = [1,2,3,4,5,7,8,9]

// let numeroArr = arrNum.map(function(num) {
//     return num +1
// }) 




let numeroArr = arrNum.map(function(num) {
  if(num % 2 === 0) {
      return num +1}
      return num
}) 



console.log(numeroArr)


// function sigma(value){
//     if (value == 1){
//         return 1;
//     }
//     return value + sigma(value-1)
// }
// console.log(sigma(3));


function factorial(value){
    if (value <= 0 ){
        return 1;
    }
    return value * factorial(value-1)
}

console.log(factorial( Math.trunc(-5)))
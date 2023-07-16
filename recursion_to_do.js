var sum = 0;
function sigma(value){
    if (value == 1){
        return (sum = sum+value);
    }
    return (sum = sum+value), sigma(value-1)
}
console.log(sigma(5));


var multiply = 1;
function factorial(value){
    if (value <= 0 ){
        return multiply *= 1;
    }
    return multiply *= value, factorial(value-1)
}

console.log(factorial( Math.trunc(-5)))
function getFactorial(number) {
    if (typeof number != 'number') {
        return 'plesase input number type value';
    }
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}

const resultFactorial = getFactorial(4);
console.log(resultFactorial);
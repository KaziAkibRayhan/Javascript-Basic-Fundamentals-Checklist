let array = [76, 88, 45, -2, -1, -6, 67, 44];

function getArrayPositiveNumber(arrs) {
    let posiNumber = [];
    for (let i = 0; i < arrs.length; i++) {
        const element = arrs[i];
        if (element > 0) {
            posiNumber.push(element);
        }
    }
    return posiNumber;
}

const positiveNumber = getArrayPositiveNumber(array);
console.log(positiveNumber);
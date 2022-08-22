let myArray = [23, 54, 67, 90, 22, 11, 45, 34, 66, 55, 100, 1001, 33];
let thisNumber = 80;
/* for (const element of myArray) {
    if (thisNumber < element) {
        thisNumber = element;
    }

}
console.log(thisNumber); */

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    if (element > thisNumber) {
        thisNumber = element
        console.log(thisNumber);
    }

}

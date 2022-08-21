let myArray = [23, 54, 67, 90, 22, 11, 45, 34, 66, 55];
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

for (const element of myArray) {
    console.log(element);
}
function bestFriend(arr) {
    let largestString = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element < largestString) {
            largestString = element;
        }
    }
    return largestString;
}

const myArray = ['Rahim', 'Jalil', 'Akbar Hossain', 'Lotif'];
const bigFriend = bestFriend(myArray);
console.log(bigFriend);
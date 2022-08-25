const myName = 'Akib Rayhan';
function reverseString(text) {
    let reversed = '';
    for (const letter of text) {
        reversed = letter + reversed;
    }
    return reversed;
}
const reverseName = reverseString(myName);
console.log(reverseName);
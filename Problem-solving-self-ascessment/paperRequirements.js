function paperRequirements(firstBook, secondBook, thirdBook) {
    const firstBookPaper = firstBook * 100;
    const secondBookPaper = secondBook * 200;
    const thirdBookPaper = thirdBook * 300;
    const totalBookPaper = firstBookPaper + secondBookPaper + thirdBookPaper;
    return totalBookPaper;
}
const firstBook = 1;
const secondBook = 3;
const thirdBook = 2;
const totalBookPage = paperRequirements(firstBook, secondBook, thirdBook);
console.log(totalBookPage);
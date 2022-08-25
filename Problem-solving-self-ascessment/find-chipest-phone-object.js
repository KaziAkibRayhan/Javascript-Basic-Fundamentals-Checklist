const shopingMall = [
    { brand: 'Samsung', price: 2000, headPhone: true },
    { brand: 'Oppo', price: 3000, headPhone: true },
    { brand: 'Walton', price: 4000, headPhone: true }
];

let chepestPrice = shopingMall[0];
for (const phone of shopingMall) {
    if (phone.price < chepestPrice) {
        chepestPrice = phone.price;
    }
}
console.log(chepestPrice);
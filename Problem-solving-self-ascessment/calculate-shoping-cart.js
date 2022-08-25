const products = [
    { laptop: 'HP', price: 60000, quantity: 1 },
    { mobile: 'Samsung', price: 30000, quantity: 1 },
    { Watch: 'Titan', price: 890, quantity: 1 },
    { drees: 'Shirt', price: 1000, quantity: 4 },
];
let totalPrice = 0;
for (const product of products) {
    const productTotal = product.price * product.quantity;
    totalPrice += productTotal;
}
console.log(totalPrice);

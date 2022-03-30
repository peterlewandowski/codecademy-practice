/* Objects
An object is a built-in data type for storing key-value pairs. Data inside objects are unordered, and the values can be of any type. */

// DOT NOTATION

const apple = {
    color: 'Green',
    price: {
        bulk: '$3/kg',
        smallQty: '$4/kg'
    }
};
console.log(apple.color); // 'Green
console.log(apple.price.bulk) // '$3/kg'

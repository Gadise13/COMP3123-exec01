// exercise5.js
const array = [1, 2, 3, 4];

const calculateSum = array.reduce((sum, num) => sum + num, 0);
const calculateProduct = array.reduce((product, num) => product * num, 1);

console.log(calculateSum);     // Output: 10
console.log(calculateProduct); // Output: 24

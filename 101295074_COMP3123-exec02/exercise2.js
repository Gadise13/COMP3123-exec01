// exercise2.js
const capitalize = (str) => {
  const [first, ...rest] = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  return `${first.toUpperCase()}${rest.join('')}`;
};

console.log(capitalize('fooBan*'));  // Foobar
console.log(capitalize('node]s*'));  // Nodejs

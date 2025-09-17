// exercise3.js
const capitalize = (str) => {
  const [first, ...rest] = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  return `${first.toUpperCase()}${rest.join('')}`;
};

const colons = ['red', 'green', 'blue'];
const capitalizedColons = colons.map(color => capitalize(color));

console.log(capitalizedColons); // ['Red', 'Green', 'Blue']

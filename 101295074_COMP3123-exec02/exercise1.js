// exercise1.js
const gretter = (myArray, counter) => {
  const greetText = 'Hello ';
  for (const name of myArray) {
    console.log(`${greetText}${name}`);
  }
};

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

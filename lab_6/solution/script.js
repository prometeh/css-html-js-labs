const hello = () => {
  console.log("Hello world");
};

hello();

const greet = (name) => {
  console.log(`Hello, ${name}, how are you?`);
};

greet("John");

const calc = (numberOne, numberTwo) => {
  return numberOne + numberTwo;
};

console.log(calc(10, 5));

const tip = (sum, percent) => {
  let total = sum + sum * percent;
  return total;
};

console.log(tip(5, 25));

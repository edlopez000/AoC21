/* eslint-disable no-console */
const fs = require('fs');

const input = fs
  .readFileSync('input.txt', 'utf-8')
  .split('\n')
  .map((item) => parseInt(item, 10));

// The forEach is mutating a variable outside of it's scope, that is not desirable
function totalIncrement(arr) {
  let sum = 0;

  const incrementDetect = (item, index, array) => {
    if (item > array[index - 1]) {
      sum += 1;
    }
  };
  arr.forEach(incrementDetect);
  return sum;
}

const total = totalIncrement(input);

console.log(`total increment = ${total}`);

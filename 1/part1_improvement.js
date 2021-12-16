const fs = require("fs");
const readline = require("readline");

const input = fs
  .readFileSync("input.txt", "utf-8")
  .split("\n")
  .map((item) => {
    return parseInt(item);
  });

// The forEach is mutating a variable outside of it's scope, that is not desirable
function totalIncrement(arr) {
  let sum = 0;

  let incrementDetect = (item, index, array) => {
    if (item > array[index - 1]) {
      sum += 1;
    }
  };
  arr.forEach(incrementDetect);
  return sum;
}

let total = totalIncrement(input);

console.log(`total increment = ${total}`);

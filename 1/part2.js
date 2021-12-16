const fs = require("fs");
const readline = require("readline");

// Don't know if toString is required here, doesn't seem to be required
let input = fs.readFileSync("input.txt", "utf-8").toString();

let inputArr = input.split("\n").map((item) => {
  return parseInt(item);
});

let lastGreater = (previous, current) => {
  let sum = 0;

  if (previous > current) {
    console.log(sum);
    return sum++;
  }
};

console.log(
  inputArr.reduce((prev, curr) => {
    return prev + curr;
  })
);

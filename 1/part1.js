const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("input.txt"),
  crlfDelay: Infinity,
});

let increments = 0;
let lastNum = undefined;

rl.on("line", (currentNum) => {
  if (lastNum === undefined) {
    lastNum = Number(currentNum);
  }

  if (currentNum > lastNum) {
    increments += 1;
  }
  lastNum = Number(currentNum);
  console.log(increments);
});

// Not the most optimal solution because increments comes out of the console.log and isn't put in a variable
// Need to get more familiar with readFileSync
// Also danwed on me that this code is not testable at all, I want to start incorporating tests into these at some point

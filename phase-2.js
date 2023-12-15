const [addNums, addManyNums] = require("./phase-1");

function addNums10(increment) {
  const sums = [];

  for (let i = increment; i <= 10 * increment; i += increment) {
    // Calculate the sum using the formula
    let sum = (i * (i + 1)) / 2;
    sums.push(sum);
  }

  return sums;
}



// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  const sums = [];


  for (let i = increment; i <= 10 * increment; i += increment) {
    let sum = 0;
    for (let j = 1; j <= i; j++) {
      sum += addNums(j);
    }
    sums.push(sum);
  }

  return sums;
}

module.exports = [addNums10, addManyNums10];
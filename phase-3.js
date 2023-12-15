const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  const sums = [];

  for (let i = increment; i <= 10 * increment; i += increment) {
    // Calculate the sum using the formula
    let sum = (i * (i + 1)) / 2;
    sums.push(sum);
  }

  return sums;
}


function addManyNums10Timing(increment) {
  const sums = [];


  for (let i = increment; i <= 10 * increment; i += increment) {
    let sum = 0;
    startTime = Date.now()
    for (let j = 1; j <= i; j++) {
      
      sum += addNums10Timing(j);
     

      
    } 
    endTime = Date.now();

    console.log( `${endTime - startTime}`);
    sums.push(sum);
  }

  return sums;
}

// console.time("addNums");
// addNums10Timing(1000000);
// console.timeEnd("addNums");



// n = 1000000
// console.log(`addNums(${n}): `);
// startTime = Date.now();
// addNums10Timing(1000000);
// endTime = Date.now();

// console.log(`Runtime: ${endTime - startTime}ms`);
console.log("\n***********\n");

n = 1000

console.log(`addManyNums(${n}): `);

addManyNums10Timing(5000);


// console.log(`Runtime: ${endTimeOne - startTimeOne}ms`);
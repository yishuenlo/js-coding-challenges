//Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

//example:
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

let n = 2;
let x = 5;
let result = [];

for (let i = 0; i < x; i++) {
  result.push(n + n * i);
}

console.log(result);

function countBy(n, x) {
  //empty array to store result
  let result = [];

  //loop through multiples of x, starting at n
  for (let i = 1; i <= x; i++) {
    //add multiples to array
    result.push(n * i);
  }

  return result;
}

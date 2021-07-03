//https://www.codewars.com/kata/554b4ac871d6813a03000035

//input = string
//output = string

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

let nums =
  "2511 3960 5357 4733 2318 4109 2551 4377 4854 5139 4753 4170 3585 4419 2536 3813 2484 3516 3382 2456 4377";

//convert string to array and numbers
let arr = nums.split(" ").map(Number);

// function highAndLow(nums) {
//   let arr = nums.split(" ").sort((a, b) => b - a);
//   return arr.length < 2 ? `${nums} ${nums}` : `${arr.shift()} ${arr.pop()}`;
// }

function highAndLow(nums) {
  //convert string to array and numbers
  let arr = nums.split(" ").map(Number);

  //grab max and min value within the array
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}

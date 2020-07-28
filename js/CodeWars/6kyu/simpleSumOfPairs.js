//https://www.codewars.com/kata/5bc027fccd4ec86c840000b7/train/javascript

//given a number, n, find two numbers that add add to n
//find sum of two numbers' digits

//example
//n = 45, a = 39, b = 6
//3 + 9 + 6 = 18

const n = 45; //18
// const n = 29; //11
// const n = 1140; //33 = 999 + 141
// const n = 7019; //35

//

//figure out how many digits in n
let digits = Math.floor(Math.log10(n));

//find largest number ends in 9s
let a = Math.floor(n / Math.pow(10, digits)) * Math.pow(10, digits) - 1;
let b = n - a;

//sum up all digits
let total = [a, b].reduce((sum, num) => {
  //loop through digits
  while (num) {
    sum += num % 10; //find remainder
    num = Math.floor(num / 10); //decrement digits
  }
  return sum;
}, 0);

console.log("a", a);
console.log("b", b);
console.log("total", total);

function solve(n) {
  //figure out how many digits in n
  let digits = Math.floor(Math.log10(n));

  //find largest number ends in 9s
  let a = Math.floor(n / Math.pow(10, digits)) * Math.pow(10, digits) - 1;
  let b = n - a;

  //sum up all digits
  return [a, b].reduce((sum, num) => {
    //loop through digits
    while (num) {
      sum += num % 10; //find remainder
      num = Math.floor(num / 10); //decrement digits
    }
    return sum;
  }, 0);
}

//https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/train/javascript

let num = 25; //47

function halvingSum(num) {
  if (num < 1) return num;
  return num + halvingSum(Math.floor(num / 2));
}
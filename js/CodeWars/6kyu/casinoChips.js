//https://www.codewars.com/kata/5e0b72d2d772160011133654

//an array representing different chips
//can only take exact two DIFFERENT chips per day
//find out how many days you can go into the casino

//example: [1,1,1] = 1
//[4,1,1] = 2
//[8,2,8] = 9

//input = array
//output = number

//find two minimums
//if third number is higher than the sum of two minmum, return sum
//else, return sum of all 3 divided by 2

const chips = [8, 2, 8];
let sorted = chips.sort((a, b) => a - b);

if (sorted[0] + sorted[1] > sorted[3]) {
  console.log(sorted[0] + sorted[1]);
}

function solve(arr) {
  //sort chips in ascending order to figure the two smallest num
  const chips = arr.sort((a, b) => a - b);
  const twoMins = chips[0] + chips[1];

  //if third number is higher than the sum of two minmum, return sum
  //else, return sum of all 3 divided by 2
  return twoMins < chips[2]
    ? twoMins
    : Math.floor(chips.reduce((a, b) => a + b) / 2);
}

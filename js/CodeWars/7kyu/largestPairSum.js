//https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

let arr = [10, 14, 2, 23, 19]; //42
//[99, 2, 2, 23, 19] //122

let max = 0;
let sum = 0;


for(let i = 0; i < arr.length - 1; i++){
    for(let j = i + 1; j < arr.length; j++){
        sum = arr[i] + arr[j];
        max = Math.max(sum, max);
        console.log(`${arr[i]} + ${arr[j]}`, sum, max);
    }
}


function largestPairSum(arr) {
  arr.sort((a, b) => b - a);
  return arr[0] + arr[1];
}

function largestPairSum2(arr) {
  let max = arr[0] + arr[1];
  let sum = 0;

  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      sum = arr[i] + arr[j];
      max = Math.max(sum, max);
      console.log(`${arr[i]} + ${arr[j]}`, sum, max);
    }
  }

  return max;
}
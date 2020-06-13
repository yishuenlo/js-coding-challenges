//write a function that finds the MINIMUM subarray length that is greater than or equal to the integer passed to the function

//input : array and an positive integer
//output : integer (length of subarray)

//exaple
//[2,3,1,2,4,3], k = 7 return 2 -> [3,4]

//find if one number >= k
//find if two numbers >= k
//find if three numbers >= k...

// let arr = [1, 4, 16, 22, 5, 7, 8, 9, 10];
// let k = 39;
//3

// let arr = [2, 3, 1, 2, 4, 3];
// let k = 7;
//2

let arr = [3, 1, 7, 11, 62, 33];
let k = 52;

let i = 0;
let j = 0;
let sum = 0;
let min = Infinity;

while (i < arr.length) {
  if (sum < k && j < arr.length) {
    sum += arr[j];
    j++;
  } else if (sum >= k) {
    min = Math.min(min, j - i);
    sum -= arr[i];
    i++;
  } else {
    break;
  }
}

function minSubArrayLen(arr, k) {
  let i = 0; //left window
  let j = 0;  //right window
  let sum = 0;
  let min = Infinity; //set to huge value to find min

  //loop through arr while i is not greater than arr.length
  while (i < arr.length) {
    //standard condition
    //continue to add value to sum if it's less than k
    if (sum < k && j < arr.length) {
      sum += arr[j];
      j++;

    //once sum greater than k
    //find min length
    //move up left window, i
    } else if (sum >= k) {
      min = Math.min(min, j - i);
      sum -= arr[i];
      i++;

    //if sum still smaller than k even after j reached to the end
    } else {
      break;
    }
  }

  //if min is still Infinity, return 0
  return min === Infinity ? 0 : min;
}

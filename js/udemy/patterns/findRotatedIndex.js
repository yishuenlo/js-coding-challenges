//in a rotated, sorted array, find the index of k
//since it's sorted array, we can use binary search
//assume numbers won't repeat?

//input = array and a number
//output = number

let arr = [6, 7, 8, 9, 1, 2, 3, 4];
let k = 1;
//returns 0

// let arr = [11, 12, 13, 14, 15, 16, 3, 5, 7, 9];
// let k = 16; //5

//need to find pivot point first
let pivot = arr.indexOf(Math.min(...arr));
let left = 0;
let right = arr.length - 1;

//if k is greater, on the left side of array
if (k >= arr[left]) {
  right = pivot - 1;
} else {
  left = pivot + 1;
}

while (left <= right) {
  pivot = Math.floor((left + right) / 2);
  if (arr[pivot] === k) {
    console.log(pivot);
    break;
  }
  if (k > arr[pivot]) {
    left = pivot + 1;
  } else {
    right = pivot - 1;
  }
}

function findRotatedIndex(arr, k) {
  //need to find pivot point first
  let pivot = arr.indexOf(Math.min(...arr));
  //break out of function if pivot matches k
  if (arr[pivot] === k) return pivot;

  //start binary search
  let left = 0;
  let right = arr.length - 1;

  //if k is greater than first num, k on the left side of array
  if (k >= arr[left]) {
    right = pivot - 1;
  } else {
    left = pivot + 1;
  }

  while (left <= right) {
    pivot = Math.floor((left + right) / 2);
    if (arr[pivot] === k) return pivot;
    if (k > arr[pivot]) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }

  return -1;
}

//https://www.codewars.com/kata/5679aa472b8f57fb8c000047

//find index within an array where its left and right sides equal to each other
//empty array equal 0

//example
// arr = [1,2,3,4,3,2,1], return index 3 (4)

//input = array
//output = number (index)

let arr = [1, 2, 3, 4, 3, 2, 1];

function balance(arr, index) {
  let left = arr.slice(0, index).reduce((a, b) => a + b, 0);
  let right = arr.slice(index + 1).reduce((a, b) => a + b, 0);
  return left === right ? index : -1;
}

function findEvenIndex(arr) {
  let index = 0;

  do {
    //find sum of left and right based on index
    let left = arr.slice(0, index).reduce((a, b) => a + b, 0);
    let right = arr.slice(index + 1).reduce((a, b) => a + b, 0);

    //return index if left equals right
    if (left === right) return index;
    index++;
  } while (index < arr.length);

  //if no match, return -1
  return -1;
}

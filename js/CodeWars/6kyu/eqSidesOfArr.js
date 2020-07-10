//https://www.codewars.com/kata/5679aa472b8f57fb8c000047

//find index within an array where its left and right sides equal to each other
//empty array equal 0

//example
// arr = [1,2,3,4,3,2,1], return index 3 (4)

//input = array
//output = number (index)

let arr = [1, 2, 3, 4, 3, 2, 1];

function findEvenIndex(arr) {
  //loop through array
  let index = 0;

  do {
    let left = arr.slice(0, index).reduce((a, b) => a + b, 0);
    let right = arr.slice(index + 1).reduce((a, b) => a + b, 0);

    //return index if left equals right
    if (left === right) return index;
    index++;
  } while (index < arr.length);

  //if no match, return -1
  return -1;
}

//refactored, faster code
function findEvenIndex(arr) {
  //loop through array, through index one and second to last index
  for (let i = 1; i < arr.length - 1; i++) {
    //find sum of left and right based on index
    let left = arr.slice(0, i).reduce((a, b) => a + b, 0);
    let right = arr.slice(i + 1).reduce((a, b) => a + b, 0);

    //return index if left equals right
    if (left === right) return i;
  }

  //if no match, return -1
  return -1;
}

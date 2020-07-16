//https://www.codewars.com/kata/5ba38ba180824a86850000f7/train/javascript

//remove left most duplicates
//input = array
//output = array

// const arr = [3, 4, 4, 3, 6, 3]; //[4, 6, 3]
const arr = [1, 2, 1, 2, 1, 2, 3]; //[1,2,3]

function solve(arr) {
  for (let i = 0; i < arr.length; i++) {
    //if there are duplicates
    if (arr.lastIndexOf(arr[i]) !== arr.indexOf(arr[i])) {
      //remove the left most duplicate
      arr.splice(arr.indexOf(arr[i]), 1);
      //decrement index to accommodate for shorter arr
      i--;
    }
  }
  return arr;
}

function solev2(arr) {
  //remove duplicate with Set
  //reverse to remove left most number
  //remove to convert back to orignal order
  return [...new Set(arr.reverse())].reverse();
}
//https://www.codewars.com/kata/5526fc09a1bbd946250002dc

//an array of numbers with length at least 3 or larger
//contains either all evens with one odd, or all odds with one even
//find the outlier

//input = array
//output = number

let arr = [2, 4, 0, 100, 4, 11, 2602, 36]; //11

function findOutlier(arr) {
    //if only one odd filtered out...
    //return odd filter, else return even filter
    let isOdd = arr.filter((n) => n % 2);
  return isOdd.length === 1
    ? isOdd[0]
    : arr.filter((n) => n % 2 === 0)[0];
}

//Complete the square sum function so that it squares each number passed into it and then sums the results together.

//input array
//output number

//example:
//squareSum([1,2]), 5
//squareSum([0, 3, 4, 5]), 50


function squareSum(arr){
    //use reduce to continuously adding current square to total sum
    return arr.reduce((sum, cur) => sum + Math.pow(cur, 2),0);
}
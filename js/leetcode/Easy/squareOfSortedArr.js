//https://leetcode.com/problems/squares-of-a-sorted-array/

let arr = [-4,-1,0,3,10];

arr.map(x => x * x).sort((a,b) => a - b);

var sortedSquares = function(A) {
    return A.map(x => x * x).sort((a,b) => a - b);
};
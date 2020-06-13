//https://www.codewars.com/kata/56001790ac99763af400008c/train/javascript

let arr = [-1, 2, -3, 4];
//16      0   1  2  3   4   5  6
//5+6-3+8

// let left = 0;
// let right = 1;
// let max = Math.max(arr[0], 0);
let min = 0;
let max = 0;
let sum = 0;


// for(let num of arr){
//     sum += num;
//     max = Math.max(max, sum);
// }

// sum = max;

// for(let num of arr){
//     sum -= num;
//     max = Math.max(max, sum);
// }

for(let num of arr){
    //add all numbers
    sum += num;

    //keep track of min subarray
    min = Math.min(sum, min);

    //remove min subarray from sum
    //if sum greater than max, assign to max
    max = Math.max(max, sum - min);
}






// max = Math.max(max, sum);
console.log(`sum: ${sum}`);
console.log(`max: ${max}`);



















function largestSum2(arr){
    if(arr.length < 1) return 0;

    let min = 0;
    let max = 0;
    let sum = 0;

    for (let num of arr) {
        //add all numbers
        sum += num;

        //keep track of min subarray
        min = Math.min(sum, min);

        //remove min subarray from sum
        //if sum greater than max, assign to max
        max = Math.max(max, sum - min);
    }

    return max;
}

function largestSum(arr) {
    if (arr.length < 1) return 0;

    let max = 0;
    let sum = 0;

    //find sum of array
    for(let num of arr){
        sum += num;

        //if sum is negative, reset sum to 0
        if(sum < 0) sum = 0;

        //if sum is greater, assign to max
        if(sum > max) max = sum;
    }

    return max;
}
//find max subarray with specified length
//must be consecutive elements

//input: array of numbers
//output: one number

let arr = [100, 200, 300, 400];
let n = 2; 

//initiate max of first n numbers
let max = 0;
for(let i = 0; i < n; i++){
    max += arr[i];
}

//loop through rest of array
let sum = max; 

for(let j = n; j < arr.length; j++){
    //substract first number; add next number
    sum = sum - arr[j - n] + arr[j];
    max = Math.max(max, sum);
}

function maxSubarraySum(arr, n){
    //set edge case
    if(arr.length < n) return null;
    
    //initiate max of first n numbers
    let max = 0;
    for (let i = 0; i < n; i++) {
        max += arr[i];
    }

    //loop through rest of array
    let sum = max;

    for (let j = n; j < arr.length; j++) {
        //substract first number; add next number
        sum = sum - arr[j - n] + arr[j];

        //assign largest of max or sum to max
        max = Math.max(max, sum);
    }

    return max;
}
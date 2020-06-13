
let arr = [1, 2, 5, 2, 8, 1, 5]; 
// let n = 2; //10
let n = 4;

//store max to keep track
let max = 0,
    sum = 0;

//find initial sum of first n numbers
for(let i = 0; i < n; i++){
    max += arr[i];
}

//set initial max as sum
sum = max; 

//loop through rest of array
for(let i = n; i < arr.length; i++){
    //delete left-most value and add right-most value
    sum = sum - arr[i - n] + arr[i];
    max = Math.max(max, sum);
}


function maxSubarrSum(arr, n){
    if(arr.length < n) return null;

    //store max to keep track
    let max = 0,
        sum = 0;

    //find initial sum of first n numbers
    for (let i = 0; i < n; i++) {
        max += arr[i];
    }

    //set initial max as sum
    sum = max;

    //loop through rest of array
    for (let i = n; i < arr.length; i++) {
        //delete left-most value and add right-most value
        sum = sum - arr[i - n] + arr[i];
        max = Math.max(max, sum);
    }

    return max;
}

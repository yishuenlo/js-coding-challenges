//input SORTED array of integers, and a target average
//find TWO numbers matching the target average
//there may be more than one pairs

//what is the output? boolean

//example: 
// arr = [1, 3, 4, 5], avg = 4
// [3, 5]

//since it's average of 2 numbers, sum / 2

//https://jsbin.com/fidadox/edit?js

let arr = [1, 2, 3, 4, 5, 6];
let avg = 4; 

let sum = avg * 2;

let lo = 0;
let hi = arr.length - 1;
let result = [];

while(lo < hi){
    if ((arr[lo] + arr[hi]) < sum) {
        lo++;
    } else {
        hi--;
    }

    if(arr[lo] + arr[hi] === sum){
        console.log([arr[lo], arr[hi]]);
        break;
    }
}


function averagePair(arr, avg){
    let sum = avg * 2;

    let lo = 0;
    let hi = arr.length - 1;

    while (lo < hi) {
        if (arr[lo] + arr[hi] === sum) return true;

        ((arr[lo] + arr[hi]) < sum) ? lo++ : hi--;     
    }

    return false;
}

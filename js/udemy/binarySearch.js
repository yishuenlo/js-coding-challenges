//return index of target 
//if doesn't exist, return -1

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 1;

let lo = 0;
let hi = arr.length;


while(lo <= hi){
    let mid = Math.floor((hi + lo) / 2);
    if(arr[mid] === k){
        console.log(mid);
        break;
    }

    if(k < arr[mid]){
        hi = mid - 1;
    } else {
        lo = mid + 1;
    }
}

function binarySearch(arr, k){
    let lo = 0;
    let hi = arr.length;

    while (lo <= hi) {
        let mid = Math.floor((hi + lo) / 2);
        if (arr[mid] === k) return mid;

        (k < arr[mid]) ? hi = mid - 1: lo = mid + 1;
    }

    return -1;
}
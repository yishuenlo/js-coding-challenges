//find how many times number n repeated in a sorted array

//input: sorted array... with duplicated numbers, target n
//output: number or -1 if number doesn't exist 

let arr = [1, 2, 2, 2, 2, 2, 3, 3, 3];
let n = 1;

let left = 0;
let right = arr.length - 1;


// while(left !== n && right !==n){
//     if(arr[right] !== n) right--;
//     if(arr[left] !== n) left++;
// }

let mid = Math.floor((left + right) / 2);

while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (arr[mid] === n) break;

    (arr[mid] > n) ? right = mid - 1: left = mid + 1;
}

if (arr[mid] === n) {
    right = mid + 1;
    left = mid - 1;
    while (arr[left] === n || arr[right] === n) {
        if(arr[left] === n) left--;
        if(arr[right] === n) right++;
    }
}

// while(left < right){
//     let mid = Math.floor((left + right) / 2);

//     if (arr[mid] === n) break;

//     (arr[mid] > n) ? right = mid - 1 : left = mid + 1;
// }

// right = n + 1;
// left = n - 1;
// while (left === n && right === n) {
//     if (arr[left] !== n) left--;
//     if (arr[irght] !== n) right++;
// }

function sortedFrequency(arr, n){
    if(arr.indexOf(n) === -1) return -1;

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        var mid = Math.floor((left + right) / 2);

        if (arr[mid] === n) break;

        (arr[mid] > n) ? right = mid - 1: left = mid + 1;
    }

    right = mid + 1;
    left = mid - 1;
    while (arr[left] === n || arr[right] === n) {
        if (arr[left] === n) left--;
        if (arr[right] === n) right++;
    }

    return right - left - 1;
}

console.log(right - left - 1);


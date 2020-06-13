//https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // 6: [4, -1, 2, 1]
let arr = [-2, -4, 6]; //-2

//if subarray great than 1, continue adding
//if subarray less than 1, drop first, add next

let max = 0;
let currentSum = 0;

if (arr.every(n => n < 0)) {
    max = Math.max(...arr);
} else {
    for (let num of arr) {
        currentSum += num;
        if (currentSum < 0) currentSum = 0;
        if (currentSum > max) max = currentSum;
    }
}



console.log(max);


// var maxSequence = function(arr){
//     let currentMax = 0;
//     let maxEnd = 0;

//     for (let i = 0; i < arr.length; i++) {
//         maxEnd = maxEnd + arr[i];
//         if (maxEnd < 0) {
//             maxEnd = 0;
//         }

//         if (currentMax < maxEnd) {
//             currentMax = maxEnd;
//         }
//     }

//     return currentMax;
// }


//if subarray greater than previous subarray, continue to add
//if subarray small than previous, drop first index
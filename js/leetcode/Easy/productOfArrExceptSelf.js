//https://leetcode.com/explore/other/card/30-day-leetcoding-challenge/530/week-3/3300/

let arr = [1,2,3,4];

//Note: Please solve it without division and in O(n).

// let product = 1;
// let result = [];
// let index = 0;

// while (index < arr.length) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[index] && index === i) {
//             continue;
//         }

//         product *= arr[i];
//     }

//     index++;
//     result.push(product);
//     product = 1;
// }

const n = arr.length;
const left = new Array(n);
const right = new Array(n);
const result = new Array(n);

left[0] = 1;
right[n-1] = 1;

for(let i = 1; i < n; i++){
    // console.log(left);
    // console.log(`${arr[i-1]} * ${left[i-1]}`);
    left[i] = arr[i-1] * left[i-1];
}

for(let i =n-2; i >= 0; i--){
    right[i] = arr[i+1] * right[i+1];
}

for(let i = 0; i < n; i++){
    result[i] = left[i] * right[i];
}

console.log(left);
console.log(right);
console.log(result);

var productExceptSelf = function (arr) {
    const n = arr.length;
    const left = new Array(n);
    const right = new Array(n);
    const result = new Array(n);

    //omit last number by insert 1 as first number
    left[0] = 1;

    //omit first number by insert 1 as last number
    right[n - 1] = 1;

    //start at index 1
    for (let i = 1; i < n; i++) {
        left[i] = arr[i - 1] * left[i - 1];
    }

    //start at last index
    for (let i = n - 2; i >= 0; i--) {
        right[i] = arr[i + 1] * right[i + 1];
    }

    for (let i = 0; i < n; i++) {
        result[i] = left[i] * right[i];
    }

    return result;
};


var productExceptSelf1 = function (arr) {
    let product = 1;
    let result = [];
    let index = 0;

    while (index < arr.length) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arr[index] && index === i) {
                continue;
            }

            product *= arr[i];
        }

        index++;
        result.push(product);
        product = 1;
    }
    return result;
};
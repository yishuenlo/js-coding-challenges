//https://leetcode.com/problems/self-dividing-numbers/

let left = 1;
let right = 22;
let output = [];

for (let i = left; i <= right; i++) {
    let arr = i.toString().split('');
    if (arr.every(x => i % x === 0)) output.push(i);
}

console.log(output);

let num = 128;
// let arr = num.toString().split('').map(x => parseInt(x));

// console.log(arr);

// let result = arr.every( x => num % x === 0);
// console.log(result);

var selfDividingNumbers = function (left, right) {
    let output = [];

    for (let i = left; i <= right; i++) {
        let arr = i.toString().split('');
        if (arr.every(x => i % x === 0)) output.push(i);
    }

    return output;
};
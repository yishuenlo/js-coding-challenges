//https://leetcode.com/problems/maximum-69-number/

let num = 6669;

let arr = num.toString().split('').map(x => parseInt(x));

for (let i = 0; i < arr.length; i++) {
    if(arr[i] === 6) {
        arr[i] = 9;
        break;
    }
}

console.log(arr);

var maximum69Number = function (num) {
    let arr = num.toString().split('').map(x => parseInt(x));

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 6) {
            arr[i] = 9;
            break;
        }
    }

    return parseInt(arr.join(''));
};
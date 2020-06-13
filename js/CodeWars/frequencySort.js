//https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc

let arr = [2, 3, 5, 3, 7, 9, 5, 3, 7];
//[3,3,3,5,5,7,7,2,9]

let hash = {};
arr.forEach(num => hash[num] = ++hash[num] || 1);
// for(let num of arr){
//     hash[num] = ++hash[num] || 1;
// }

// let result = [];

// while (!(Object.values(hash).every(x => x === 0))){
//     let max = Math.max(...Object.values(hash));
//     let key = Object.keys(hash).find(val => hash[val] === max);
//     for (let i = 0; i < max; i++) {
//         result.push(parseInt(key));
//         hash[key]--;
//     }
// }

// function solve(arr) {
//     let hash = {};
//     for (let num of arr) {
//         hash[num] = ++hash[num] || 1;
//     }

//     let result = [];
//     while (!(Object.values(hash).every(x => x === 0))) {
//         let max = Math.max(...Object.values(hash));
//         let key = Object.keys(hash).find(val => hash[val] === max);
//         for (let i = 0; i < max; i++) {
//             result.push(parseInt(key));
//             hash[key]--;
//         }
//     }

//     return result;
// }

function solve(arr) {
    let hash = {};
    arr.forEach(num => hash[num] = ++hash[num] || 1);

    return arr.sort((a, b) => hash[b] - hash[a] || a - b);
}

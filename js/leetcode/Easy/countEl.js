//https://leetcode.com/explore/other/card/30-day-leetcoding-challenge/528/week-1/3289/

let arr = [1, 3, 2, 3, 5, 0];
let hash = {};
let result = 0;

arr = arr.sort((a, b) => a - b);
for (let num of arr) {
    (!hash[num + 1]) ? hash[num + 1] = num : result += 1;
    // if (hash[num ]) ;
    if (hash[num] >= 0) console.log(`${hash[num]}`);
}
// 
console.log(hash);
console.log(result);

var countElements = function (arr) {
    arr = arr.sort((a, b) => a - b);

    let hash = {},
        result = 0;

    for (let num of arr) {
        if (!hash[num + 1]) hash[num + 1] = num;
        if (hash[num]) result++;
    }

    return result;
};
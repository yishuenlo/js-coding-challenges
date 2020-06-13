//https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/

let str = "leetcode";
let obj = {};

for(let letter of str){
    obj[letter] = obj[letter] + 1 || 1;
}

// for(let char in obj){
//     if(obj[char] === 1)
// }

var firstUniqChar = function (str) {
    if(!str) return -1;
    let obj = {};

    for (let letter of str) {
        obj[letter] = obj[letter] + 1 || 1;
    }

    for (let char in obj) {
        if(obj[char] === 1) return str.indexOf(char);
    }

    return -1;
};
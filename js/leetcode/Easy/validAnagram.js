//https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/

let s = "anagram";
let t = "nagaram";

let letters = function (str) {
    return str.split('').sort().join('');
}

var isAnagram = function (s, t) {
    if(s.length !== t.length) return false;
    
    let letters = function (str) {
        return str.split('').sort().join('');
    }

    return letters(s) === letters(t);
};
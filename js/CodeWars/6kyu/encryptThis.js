//https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript

let str = "a"; //97n

let result = str.split(' ').map(function(word){
    if(word.length === 1){
        return word.charCodeAt();
    } else if (word.length === 2){
        return word.charCodeAt() + word[1];
    } else {
        return word[0].charCodeAt() + word[word.length - 1] + word.slice(2, word.length - 1) + word[1];
    }
}).join(' ');
    
    

console.log(result);

var encryptThis = function (str) {
    return str.split(' ').map(function (word) {
        if (word.length === 1) {
            return word.charCodeAt();
        } else if (word.length === 2) {
            return word.charCodeAt() + word[1];
        } else {
            return word[0].charCodeAt() + word[word.length - 1] + word.slice(2, word.length - 1) + word[1];
        }
    }).join(' ');
}
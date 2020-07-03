//https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

let s = 'sTretss'; //r

let str = s.toLowerCase();
for(let i = 0; i < str.length; i++){
    if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
        console.log(s[i]);
        break;
    }
}

function firstNonRepeatingLetter(s) {
    //case insensitive
    let str = s.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        //check for first and last occurance of letter
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return s[i];
        }
    }

    return '';
}



function firstNonRepeatingLetter1(str) {
    let obj = {};

    //case insenstive
    for (let char of str) {
        char = char.toLowerCase();
        obj[char] = ++obj[char] || 1;
    }

    for (let char of str) {
        if (obj[char.toLowerCase()] < 2) return char;
    }

    return "";
}
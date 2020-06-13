//https://www.codewars.com/kata/5168bb5dfe9a00b126000018

let str = 'world';
let last = str.length - 1;
// 'dlrow'

// ordlw
// rdlow
// dlrow

function reverse(str){
    if(!str.length) return str;
    str = str.slice(1) + str[0];
}

let left = 0;
let right = str.length - 1;


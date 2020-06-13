//https://www.codewars.com/kata/5a262cfb8f27f217f700000b

let str1 = "xyabb";
let str2 = "xzca";

// "ybbzc"

let result = '';
let str = str1 + str2;
for(let char of str){
    if(str1.indexOf(char) === -1) result += char;
    if(str2.indexOf(char) === -1) result += char;
}
//check to see if character in str1 is in str2
// for(let char of str1){
//     if(str2.indexOf(char) == -1) result += char;
// }

// for (let char of str2) {
//     if (str1.indexOf(char) == -1) result += char;
// }

function checkUnique(str1, str2){
    let result = '';
    for (let char of str1) {
        if (str2.indexOf(char) == -1) result += char;
    }

    return result;
}

console.log(result);

function solve(a, b){
    return (a + b) //combine strings into one
        .split('') //convert to array for methods
        //filter to see if char is not in a OR char is not in B
        .filter(char => !a.includes(char) || !b.includes(char)) 
        .join(''); //convert back to string
}
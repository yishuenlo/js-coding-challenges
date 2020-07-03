//https://www.codewars.com/kata/59dbab4d7997cb350000007f

let str = "abcdefghijk"; //123321
let b = "abcdefghijba"; //123321

let hash = {};

let result = '';

for (let i = 0; i < str.length; i++) {
    if (hash[str[i]] == null) hash[str[i]] = i;
    result += "-" + hash[str[i]];
}



// let convert = function(str){
//     let result = ''
//     for (let i = 0; i < str.length; i++) {
//         if (hash[str[i]] == null) hash[str[i]] = i;
//         result += "-" + hash[str[i]];
//     }

//     return result;
// }

let convert = function (str) {
    return str
        .split('')
        .map(i => str.indexOf(i))
        .join();
}


// for(let i = 0; i < a.length; i++){
//     if (hash[a[i]] == null) {
//         console.log(a[i]);
//         hash[a[i]] = i;
//     }
// }

console.log(hash);
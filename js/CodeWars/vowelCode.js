//https://www.codewars.com/kata/53697be005f803751e0015aa

let str1 = 'hello'; //h2ll4
let str = 'h2ll4'; //hello

// a - > 1
// e - > 2
// i - > 3
// o - > 4
// u - > 5

const vowels = {
    'a': '1',
    'e': '2',
    'i': '3',
    'o': '4',
    'u': '5'
}


function encode(str){
    return str.replace(/[aeiou]/g, val => vowels[val]);
}

function decode(str){
    return str.replace(/[12345]/g, val => Object.keys(vowels)[--val]);
}

decode('h2ll4');





for (let char of str) {
    

    let key = (char.charCodeAt() >= 49 && char.charCodeAt() <= 53) ?Object.keys(vowels)[--char] : "";
    console.log(char, key);

    if(key) str = str.replace(char, key);
}














// function encode1(str){
//     for (let char of str) {
//         if (vowels[char]) {
//             str = str.replace(char, vowels[char])
//         };
//     }

//     return str;
// }

function decode1(str){
    for (let char of str) {
        if(char >= 49 && char <= 53){
            let key = Object.keys(vowels)[char];
            console.log
        }
        
        str = str.replace(char, key);
    }

    return str;
}

//https://www.codewars.com/kata/53e895e28f9e66a56900011a

// let str = 'aaAabb dddDD hhcc';
let str = 'aaAabbdddDDhhcc';
str = str.toLowerCase();
let obj = {};

for (let char of str) {
    obj[char] = ~~obj[char] + 1;
    // char = char.toLowerCase();
    // if (char.charCodeAt() > 96 && char.charCodeAt() < 123){
    //     if(obj[char] > 0){
    //         obj[char] += 1;
    //     }else {
    //         obj[char] = 1;
    //     }
    // };
}

console.log(obj);

let sortedValues = Object.values(obj).sort((a, b) => b - a);

console.log(sortedValues);

let result = [];
// let i = 0;



for (let val of sortedValues) {
    for (let key in obj) {
        if (obj[key] === val) {
            result.push([key, obj[key]]);
            obj[key] = 0;
        }
    }
}
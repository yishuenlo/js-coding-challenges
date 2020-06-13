//https://www.codewars.com/kata/57a6633153ba33189e000074/train/javascript

let str = "abracadabra";



// let map = new Map();

// for(let char of str){
//     if(!map.has(char)){
//         map.set(char, 1)
//     } else {
//         map.set(char, map.get(char) + 1);
//     }
// }

// console.log(map);

// let result = [];

// for(let key of map.keys()){
//     result.push([key, map.get(key)]);
// }

[...new Set([...str])]

var orderedCount = function (str) {
    //use Set to remove duplicates
    //wrap around [...] to create new array
    return [...new Set([...str])]

    //use map on Set to find number of characters within str
    //split char will know how many are in the string
    .map(char => [char, str.split(char).length -1]);
}


//1334ms
var orderedCount1 = function (str) {
    //set up map with values
    let map = new Map();

    for (let char of str) {
        if (!map.has(char)) {
            map.set(char, 1)
        } else {
            map.set(char, map.get(char) + 1);
        }
    }

    //populate result array
    let result = [];

    for (let key of map.keys()) {
        result.push([key, map.get(key)]);
    }

    return result;
}

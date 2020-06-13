//https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d/train/javascript

//count frequency of letters in a string
//input: string
//output: obj

let str = 'codewarscodewars';



function letterCount(str) {
    let hash = {};

    for (let char of str) {
        hash[char] = ~~hash[char] + 1;
    }

    return hash;
}
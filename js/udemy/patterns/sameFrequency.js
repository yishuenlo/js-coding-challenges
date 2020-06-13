//input: 2 numbers
//output: boolean

let num1 = 182;
let num2 = 2811;

num1 = num1.toString();
num2 = num2.toString();

let obj = {};

for(let num of num1){
    obj[num] = ++obj[num] || 1;
}

for(let num of num2){
    if(obj[num] !== null) --obj[num];
}

Object.values(obj).every(x => x === 0);

function sameFrequency(num1, num2){
    num1 = num1.toString();
    num2 = num2.toString();
    if(num1.length !== num2.length) return false;

    let obj = {};

    for (let num of num1) {
        obj[num] = ++obj[num] || 1;
    }

    for (let num of num2) {
        if (obj[num] !== null) --obj[num];
    }

    return Object.values(obj).every(x => x === 0);
}
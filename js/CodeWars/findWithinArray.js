// https://www.codewars.com/kata/51f082ba7297b8f07f000001


let arr = [1, 3, 5, 6, 7];
// let arr = [13, 5, 3, 1, 4, 5];

var trueIfEven = function (value, index) {
    return (value % 2 === 0)
};

var trueIfValueEqualsIndex = function (v, i) {
    return v === i;
}

function findInArray(arr, fn){
    let match = arr.filter((item, i) => fn(item, i))[0];
    return arr.indexOf(match);
}

arr.map((item, i) => trueIfValueEqualsIndex(item, i));

// arr.filter((item, i) => trueIfValueEqualsIndex(item, i));


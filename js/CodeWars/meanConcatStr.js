//https://www.codewars.com/kata/56f7493f5d7c12d1690000b6

let arr = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']

//filter out numbers based on charCode
// let mean = arr.filter(x => x.charCodeAt() >= 48 && x.charCodeAt() <= 57).reduce((a, b) => (parseInt(a) + parseInt(b))) / 10;

// //filter out letters
// let string = arr.filter(x => x.charCodeAt() >= 97 && x.charCodeAt() <= 122).join('');

function mean1(arr) {
    let mean = arr.filter(x => x.charCodeAt() >= 48 && x.charCodeAt() <= 57).reduce((a, b) => (parseInt(a) + parseInt(b))) / 10;

    //filter out letters
    let string = arr.filter(x => x.charCodeAt() >= 97 && x.charCodeAt() <= 122).join('');

    return [mean, string];
}

let num = 0,
    str = '';

// for (let item of arr) {
//     (isNaN(item)) ? str += item : num += parseInt(item);
// }

arr.forEach(item => (isNaN(item)) ? str += item : num += parseInt(item));

function mean(arr) {
    let num = 0,
        str = '';

    //assign num or str
    arr.forEach(item => (isNaN(item)) ? str += item : num += parseInt(item));

    return [num / 10, str];
}